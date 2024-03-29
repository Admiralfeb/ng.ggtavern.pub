import { AboutService } from './about.service';
import { DatabaseService } from '@core/services/database.service';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { Position, Worker } from '../about.models';
import { SortService } from '@core/services/sort.service';
import positions from '../jobs.json';
import { SecurityContext } from '@angular/core';

describe('AboutService', () => {
  let service: AboutService;
  let sanitizer: DomSanitizer;


  const databaseServiceSpy = jasmine.createSpyObj<DatabaseService>(['getItemswithID']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AboutService,
        { provide: DatabaseService, useValue: databaseServiceSpy },
        SortService
      ]
    });
    service = TestBed.inject(AboutService);
    sanitizer = TestBed.inject(DomSanitizer);
  });

  afterEach(() => {
    // databaseServiceSpy.getItemsandSingleSub.and.stub();
    // databaseServiceSpy.sortItems.and.stub();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return positions and workers', async () => {
    databaseServiceSpy.getItemswithID.and
      .returnValue(Promise.resolve<Position[]>([positions.DMs, positions.barstaff, positions.kitchen, positions.owners]));
    let expectedDefault: Position[] = [
      {
        id: '123654',
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
        id: '987357',
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
        id: '6573249841657',
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
        id: '357357165',
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
          worker.imgUrl = sanitizer.sanitize(SecurityContext.URL, worker.imgPath);
        } else {
          worker.imgUrl = sanitizer.sanitize(SecurityContext.URL, 'assets/img/android-chrome-512x512.png');
        }
        return worker;
      });
      return position;
    });


    const items = await service.getPositions();

    expect(items).toEqual(expectedDefault);
  });

});
