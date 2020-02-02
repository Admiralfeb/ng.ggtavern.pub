import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observer } from 'rxjs';
import { GameSystem } from '../../games.models';
import { GamesService } from '../../services/games.service';
import { DialogService } from '@core/services/dialog.service';


/**
 * Displays the list of games
 */
@Component({
  selector: 'game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['./game-options.component.scss']
})
export class GameOptionsComponent implements OnInit {
  note = '';
  games = [];

  constructor(private route: ActivatedRoute, private router: Router, private gamesService: GamesService, private dialog: DialogService) { }

  /** runs on initialization */
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

  /**
   * On location change, gets the correct game system and games.
   * @param params router parameters
   */
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
    } else {
      this.router.navigate(['404']);
    }
  }
}
