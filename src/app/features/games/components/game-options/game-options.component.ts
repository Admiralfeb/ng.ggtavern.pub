import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observer, Subscription } from 'rxjs';
import { GameSystem, Game } from '../../models/model';
import { GamesService } from '../../services/games.service';
import { DialogService, AuthService } from '@core/services';


@Component({
  selector: 'game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['./game-options.component.scss']
})
export class GameOptionsComponent implements OnInit, OnDestroy {
  note = '';
  games: Game[] = [];
  isLoggedIn = false;
  subs: Subscription[] = [];
  isChanged = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gamesService: GamesService,
    private dialog: DialogService,
    private auth: AuthService,
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
    this.subs = [...this.subs, this.auth.getLoginState().subscribe((value: boolean) => this.isLoggedIn = value)];
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
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

      const contentContainer = document.querySelector('game-options') || window;
      contentContainer.scrollTo(0, 0);
      contentContainer.scroll(0, 0);
      this.isChanged = false;
    } else {
      this.router.navigate(['404']);
    }
  }

  editNote() {

  }

  editGame(game: Game) {
    this.isChanged = true;
  }

  deleteGame(game: Game) {
    this.games = this.games.filter((g, _) => g !== game);
    this.games = this.gamesService.sortGames(this.games);
    this.isChanged = true;
    console.log('Deleted:', game);
  }

  saveChanges() {

  }
}
