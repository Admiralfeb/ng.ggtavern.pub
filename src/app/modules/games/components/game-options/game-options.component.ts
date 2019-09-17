import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observer } from 'rxjs';
import { GameSystem, Game } from '../../models/model';
import { GamesService } from '../../services/games.service';


@Component({
  selector: 'game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['./game-options.component.scss']
})
export class GameOptionsComponent implements OnInit {
  note = '';
  games = [];

  constructor(private route: ActivatedRoute, private router: Router, private dataService: GamesService) { }

  ngOnInit() {
    this.dataService.systemsLoaded().then(_ => {
      const locationobserver: Observer<Params> = {
        next: x => this.onLocationChange(x),
        error: err => console.error('error reading router params'),
        complete: () => console.log('complete')
      };
      this.route.params.subscribe(locationobserver);
    });
  }

  async onLocationChange(params: Params) {
    const system: GameSystem = this.dataService.getSystem(params.id);
    if (system) {
      if (system.note != null) {
        this.note = system.note;
      } else {
        this.note = '';
      }
      this.games = await this.dataService.getGames(system.short);
      const contentContainer = document.querySelector('game-options') || window;
      contentContainer.scrollTo(0, 0);
      contentContainer.scroll(0, 0);
    } else {
      this.router.navigate(['games', '404']);
    }
  }
}
