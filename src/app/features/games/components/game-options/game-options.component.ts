import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observer, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { GameSystem, Game } from '../../models/model';
import { GamesService } from '../../services/games.service';
import { DialogService } from '@core/services';
import { GameDialogComponent } from '../game-dialog/game-dialog.component';
import { SystemDialogComponent } from '../system-dialog/system-dialog.component';
import { GameSystemDialogData } from '../system-dialog/dialog.model';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['./game-options.component.scss']
})
export class GameOptionsComponent implements OnInit {
  note = '';
  games: Game[] = [];
  isLoggedIn = false;
  subs: Subscription[] = [];
  isChanged = false;
  private currentSystem: GameSystem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gamesService: GamesService,
    private dialog: DialogService
  ) { }

  ngOnInit() {
    this.gamesService.systemsLoaded().then(_ => {
      const locationobserver: Observer<Params> = {
        next: x => this.onLocationChange(x),
        error: err => console.error('error reading router params'),
        complete: () => console.log('complete')
      };
      this.subs = [...this.subs, this.route.params.subscribe(locationobserver)];
    });
    this.subs = [...this.subs, this.gamesService.getisLoggedIn().subscribe((value: boolean) => this.isLoggedIn = value)];
  }

  async onLocationChange(params: Params) {
    const system: GameSystem = this.gamesService.getSystem(params.id);
    if (system) {
      if (system.note != null) {
        this.note = system.note;
      } else {
        this.note = '';
      }
      if (system.games != null) {
        this.games = system.games;
      } else {
        this.note = 'No games listed';
      }
      this.currentSystem = system;

      const contentContainer = document.querySelector('game-options') || window;
      contentContainer.scrollTo(0, 0);
      contentContainer.scroll(0, 0);
      this.isChanged = false;
    } else {
      this.router.navigate(['404']);
    }
  }

  editNote() {
    const dialogRef = this.dialog.dialog.open(GameDialogComponent, {
      width: '300px',
      data: { query: 'Enter Note for System:', value: this.note }
    });

    const dialogRef$ = dialogRef.afterClosed().pipe(take<string>(1));
    dialogRef$.subscribe((value: string) => {
      if (value) {
        this.isChanged = true;
        this.note = value;
      } else { return; }
    });
  }

  addSystem() {
    const dialogRef = this.dialog.dialog.open<SystemDialogComponent, GameSystemDialogData>(SystemDialogComponent, {
      data: { query: 'Enter system name along with a short name:', name: '', short: '' }
    });

    const dialogRef$ = dialogRef.afterClosed().pipe(take<GameSystemDialogData>(1));
    dialogRef$.subscribe(async (data) => {
      if (data.short) {
        try {
          const newShort = await this.gamesService.addSystem(data);
          this.router.navigate([`/games/${newShort}`]);
        } catch (err) {
          this.dialog.showWarning(err.message);
        }
      }
    });
  }

  addGame(): void {
    const dialogRef = this.dialog.dialog.open(GameDialogComponent, { data: { query: 'Enter game name:', value: '' } });

    const dialogRef$ = dialogRef.afterClosed().pipe(take<string>(1));
    dialogRef$.subscribe((value: string) => {
      if (value) {
        if (this.games.find(x => x.name.toUpperCase() === value.toUpperCase())) {
          this.dialog.showWarning(`The item '${value}' is already in the list. No duplicates allowed`);
        } else {
          const newGame: Game = { name: value, players: '' };
          this.games = [...this.games, newGame];
          this.games = this.gamesService.sortGames(this.games);
          this.isChanged = true;
        }
      } else {
        this.dialog.showWarning('Nothing was entered');
      }
    });
  }

  editGame(game: Game) {
    const dialogRef = this.dialog.dialog.open(GameDialogComponent, {
      width: '300px',
      data: { query: 'Enter game name:', value: game.name }
    });

    const dialogRef$ = dialogRef.afterClosed().pipe(take<string>(1));
    dialogRef$.subscribe((value: string) => {
      if (value) {
        this.isChanged = true;
        const index = this.games.indexOf(game);
        const newGame: Game = { name: value, players: game.players };
        this.games[index] = newGame;
        this.games = this.gamesService.sortGames(this.games);
      } else { return; }
    });

  }

  deleteGame(game: Game) {
    this.games = this.games.filter((g, _) => g !== game);
    this.games = this.gamesService.sortGames(this.games);
    this.isChanged = true;
    console.log('Deleted:', game);
  }

  async saveSystem() {
    try {
      this.gamesService.saveSystem(this.currentSystem, this.note, this.games);
      this.isChanged = false;
    } catch (error) {
      this.dialog.showError(error);
    }
  }

  /**
   * Enables user to rename a system
   * @param newName new name of System
   */
  editSystem(newName: string) {

  }

  async deleteSystem() {
    try {
      if (this.games.length > 0) {
        this.dialog.showWarning('System still has games. Please delete them before continuing.');
        return;
      }
      this.gamesService.deleteSystem(this.currentSystem);
      this.isChanged = false;
      this.router.navigate(['/games/home']);
    } catch (err) {
      console.error(err);
    }
  }
}
