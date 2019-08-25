import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observer } from 'rxjs';
import gamesystems from 'src/assets/gameoptions.json';
import { GameSystem, Game } from '../../models/model';


@Component({
  selector: 'game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['./game-options.component.scss']
})
export class GameOptionsComponent implements OnInit {
  note = '';
  games = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const locationobserver: Observer<Params> = {
      next: x => this.onLocationChange(x),
      error: err => console.error('error reading router params'),
      complete: () => console.log('complete')
    };
    this.route.params.subscribe(locationobserver);
  }

  onLocationChange(params: Params) {
    const system: GameSystem = gamesystems.find(x => x.short === params.id);
    if (system) {
      if (system.note != null) {
        this.note = system.note;
      } else {
        this.note = '';
      }
      this.games = system.games;
      this.games = this.games.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.router.navigate(['games', '404']);
    }
  }
}
