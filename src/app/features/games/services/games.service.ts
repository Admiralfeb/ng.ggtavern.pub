import { Injectable } from '@angular/core';
import { GameSystem, Game } from '../models/model';
import { SortService, AuthService, DatabaseService } from '@core/services';
import { GameSystemDialogData } from '../components/system-dialog/dialog.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class GamesService {
  private isAuthorized = false;
  private systems: GameSystem[] = [];
  private systemSubject = new BehaviorSubject<GameSystem[]>(this.systems);
  private systems$: Observable<GameSystem[]>;
  constructor(
    /** Database Service. Used for getting the Systems and Games */
    private db: DatabaseService,
    /** Sort service. Used for sorting Systems and Games */
    private sort: SortService,
    /** Reference to AuthService. Used for Login state. */
    private auth: AuthService) {
    this.auth.getLoginState().subscribe((value: boolean) => {
      this.isAuthorized = value;
    });
    this.systems$ = this.systemSubject.asObservable();
  }

  get isLoggedIn(): boolean {
    return this.isAuthorized;
  }

  /** Checks that the systems are loaded once every second for 10 seconds. */
  async systemsLoaded(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const interval = setInterval(() => {
        if (this.systems.length > 0) {
          clearInterval(interval);
          resolve(true);
        }
      }, 1000);
      setTimeout(() => {
        if (this.systems.length <= 0) {
          reject(false);
        }
      }, 10000);
    });
  }
  /** Gets the game systems from the Database if they do not exist in memory. */
  getSystems(): Observable<GameSystem[]> {
    const pathString = `games`;

    if (this.systems.length > 0) {
      return this.systems$;
    }

    try {
      let systems: GameSystem[] = [];
      const dataPromise = this.db.getItemswithID<GameSystem>(pathString);
      dataPromise.then(itemData => {
        systems = this.sort.sortItems(itemData, 'system');
        systems = systems.map(system => {
          let games = system.games;
          games = this.sort.sortItems(games, 'name');
          system.games = games;
          return system;
        });
        this.systems = systems;
        this.systemSubject.next(systems);
      });
      return this.systems$;
    } catch (err) {
      throw err;
    }
  }

  getSystem(systemShort: string): GameSystem {
    console.log(systemShort);
    return this.systems.find(x => {
      console.log(x.id);
      if (x.id === systemShort) {
        return x;
      }
    });
  }

  async addSystem(data: GameSystemDialogData): Promise<string> {
    if (data) {
      if (data.name) {
        if (this.systems.find(x => x.system.toUpperCase() === data.name.toUpperCase())) {
          throw new Error('No Duplicate System names Allowed');
        }
        if (data.short) {
          if (this.systems.find(x => x.short.toUpperCase() === data.short.toUpperCase())) {
            throw new Error('No duplicate system short names allowed');
          }
        } else {
          throw new Error('Short name must be populated.');
        }

        const newGame: GameSystem = { id: data.short, system: data.name, short: data.short, note: '', games: [] };
        this.systems = [...this.systems, newGame];
        this.systems = this.sort.sortItems(this.systems, 'system');
        this.systemSubject.next(this.systems);
        return data.short;
      }
    }
    return null;
  }

  sortGames(games: Game[]): Game[] {
    return this.sort.sortItems(games, 'name');
  }

  async saveSystem(system: GameSystem, note: string, games: Game[]) {
    system.note = note;
    system.games = games;
    try {
      await this.db.setDocument('games', system);
    } catch (err) {
      throw err;
    }
  }

}
