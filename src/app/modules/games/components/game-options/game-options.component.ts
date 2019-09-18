import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observer } from 'rxjs';
import { GameSystem, Game } from '../../models/model';
import { GamesService } from '../../services/games.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent, MessageDialogData, MessageType } from '@shared/components';


@Component({
  selector: 'game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['./game-options.component.scss']
})
export class GameOptionsComponent implements OnInit {
  note = '';
  games = [];

  constructor(private route: ActivatedRoute, private router: Router, private gamesService: GamesService, private dialog: MatDialog) { }

  ngOnInit() {
    this.gamesService.systemsLoaded().then(_ => {
      const locationobserver: Observer<Params> = {
        next: x => this.onLocationChange(x),
        error: err => console.error('error reading router params'),
        complete: () => console.log('complete')
      };
      this.route.params.subscribe(locationobserver);
    });
  }

  async onLocationChange(params: Params) {
    const system: GameSystem = this.gamesService.getSystem(params.id);
    if (system) {
      if (system.note != null) {
        this.note = system.note;
      } else {
        this.note = '';
      }
      try {
        this.games = await this.gamesService.getGames(system.short);
      } catch (err) {
        console.error(err);
        const errMessage = 'There was an error retrieving the games from the database';
        const errDialogData: MessageDialogData = { message: errMessage, type: MessageType.error };
        this.dialog.open(MessageDialogComponent, { data: errDialogData });
      }
      const contentContainer = document.querySelector('game-options') || window;
      contentContainer.scrollTo(0, 0);
      contentContainer.scroll(0, 0);
    } else {
      this.router.navigate(['games', '404']);
    }
  }
}
