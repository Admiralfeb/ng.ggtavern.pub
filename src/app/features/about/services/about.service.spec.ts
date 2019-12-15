import { AboutService } from './about.service';
import { DatabaseService } from '@core/services/database.service';
import { DomSanitizer, ɵBROWSER_SANITIZATION_PROVIDERS } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import * as positions from '@assets/jobs.json';
import { Position, Worker } from '../about.models';
import { SortService } from '@core/services/sort.service';

describe('AboutService', () => {
  let service: AboutService;
  let sanitizer: DomSanitizer;


  const databaseServiceSpy = jasmine.createSpyObj<DatabaseService>(['getItemsandSingleSub']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AboutService,
        { provide: DatabaseService, useValue: databaseServiceSpy },
        DomSanitizer,
        ɵBROWSER_SANITIZATION_PROVIDERS,
        SortService
      ]
    });
    service = TestBed.get(AboutService);
    sanitizer = TestBed.get(DomSanitizer);
  });

  afterEach(() => {
    // databaseServiceSpy.getItemsandSingleSub.and.stub();
    // databaseServiceSpy.sortItems.and.stub();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return positions and workers', async () => {
    databaseServiceSpy.getItemsandSingleSub.and
      .returnValue(Promise.resolve<Position[]>([positions.DMs, positions.barstaff, positions.kitchen, positions.owners]));
    let expectedDefault: Position[] = [
      {
        name: 'Owner Goblins',
        order: 0,
        workers: [
          {
            name: 'Jen and Pat',
            quote: 'Marshmallows have no bones',
            info: '',
            imgPath: 'https://ggtavern.pub/hello.png',
          }
        ]
      },
      {
        name: 'Bar Faeries',
        order: 1,
        workers: [
          {
            name: 'Diana',
            quote: '',
            info: '',
            imgPath: ''
          },
          {
            name: 'Kaitie',
            quote: '',
            info: '',
            imgPath: ''
          }
        ]
      },
      {
        name: 'Kitchen Dragons',
        order: 2,
        workers: [
          {
            name: 'Amarah',
            quote: '',
            info: '',
            imgPath: ''
          },
          {
            name: 'Anthony',
            quote: '',
            info: '',
            imgPath: ''
          },
          {
            name: 'Jane',
            quote: '',
            info: '',
            imgPath: ''
          }
        ]
      },
      {
        name: 'Masters of Dungeons',
        order: 3,
        workers: [
          {
            name: 'Daniel',
            quote: '',
            info: '',
            imgPath: ''
          },
          {
            name: 'Jeff',
            quote: '',
            info: '',
            imgPath: ''
          }
        ]
      }
    ];
    expectedDefault = expectedDefault.map((position: Position) => {
      position.workers = position.workers.map((worker: Worker) => {
        if (worker.imgPath) {
          worker.imgUrl = sanitizer.bypassSecurityTrustUrl(worker.imgPath);
        } else {
          worker.imgUrl = sanitizer.bypassSecurityTrustUrl('@assets/img/android-chrome-512x512.png');
        }
        return worker;
      });
      return position;
    });


    const items = await service.getPositions();

    expect(items).toEqual(expectedDefault);
  });

});
