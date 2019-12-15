import { DatabaseService } from './database.service';
import { AngularFirestore, Query } from '@angular/fire/firestore';
import { TestBed } from '@angular/core/testing';
import firebase from 'firebase';
import { of } from 'rxjs';

describe('DatabaseService', () => {
  let service: DatabaseService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFirestore, useValue: {} },
      ]
    });
    service = TestBed.get(DatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



});

describe('DatabaseService calls to FireStore', () => {
  let service: DatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFirestore, useValue: {} },
      ]
    });
    // service = TestBed.get(DatabaseService);
  });

  it('should get an empty array when collection is empty', async () => {
    const blankData: firebase.firestore.QuerySnapshot = {
      docs: [],
      metadata: null,
      size: null,
      empty: true,
      query: null,
      docChanges: null,
      forEach: null,
      isEqual: null
    };
    const blankObservable = of(blankData);
    const blankSpy = {
      get: jasmine.createSpy('get').and.returnValue(blankObservable)
    };
    const firestoreBlankSpy = {
      collection: jasmine.createSpy('collection').and.returnValue(blankSpy)
    };

    TestBed.overrideProvider(AngularFirestore, { useValue: firestoreBlankSpy });
    service = TestBed.get(DatabaseService);

    const items = await service.getItems('');
    expect(items).toEqual([]);
  });

  it('should get an array of test items', async () => {
    const singleTestData: TestData[] = [
      {
        test: 'objects-c',
        data: [
          { a: 'hello', b: 'really', c: 'fun' },
          { a: 'bye', b: 'ah', c: 'zed' }],
        sort: 'c',
        expected: [
          { a: 'hello', b: 'really', c: 'fun' },
          { a: 'bye', b: 'ah', c: 'zed' }
        ]
      },
      {
        test: 'objects-b',
        data: [
          { a: 'hello', b: 'really', c: 'fun' },
          { a: 'bye', b: 'ah', c: 'zed' }
        ],
        sort: 'b',
        expected: [
          { a: 'bye', b: 'ah', c: 'zed' },
          { a: 'hello', b: 'really', c: 'fun' }]
      },
      {
        test: 'objects-a',
        data: [
          { a: 'hello', b: 'really', c: 'fun' },
          { a: 'bye', b: 'ah', c: 'zed' }
        ],
        sort: 'a',
        expected: [
          { a: 'bye', b: 'ah', c: 'zed' },
          { a: 'hello', b: 'really', c: 'fun' }
        ]
      }
    ];
    const someData: firebase.firestore.QuerySnapshot = {
      docs: [
        {
          data: () => singleTestData[0],
          exists: true,
          ref: null,
          id: null,
          metadata: null,
          get: null,
          isEqual: null
        },
        {
          data: () => singleTestData[1],
          exists: true,
          ref: null,
          id: null,
          metadata: null,
          get: null,
          isEqual: null
        },
        {
          data: () => singleTestData[2],
          exists: true,
          ref: null,
          id: null,
          metadata: null,
          get: null,
          isEqual: null
        }
      ],
      metadata: null,
      size: null,
      empty: false,
      query: null,
      docChanges: null,
      forEach: null,
      isEqual: null
    };
    const someObservable = of(someData);
    const someSpy = {
      get: jasmine.createSpy('get').and.returnValue(someObservable)
    };
    const firestoreSomeSpy = {
      collection: jasmine.createSpy('collection').and.returnValue(someSpy)
    };

    TestBed.overrideProvider(AngularFirestore, { useValue: firestoreSomeSpy });
    service = TestBed.get(DatabaseService);

    const items = await service.getItems('');
    expect(items).toEqual(singleTestData);
  });

  it('should throw error if database errs', async () => {
    const errorSpy = {
      get: jasmine.createSpy('get').and.throwError('database failed')
    };
    const firestoreErrorSpy = {
      collection: jasmine.createSpy('collection').and.returnValue(errorSpy)
    };

    TestBed.overrideProvider(AngularFirestore, { useValue: firestoreErrorSpy });
    service = TestBed.get(DatabaseService);
    await expectAsync(service.getItems<TestData>('')).toBeRejectedWithError('database failed');
  });

});

interface TestData {
  test: string;
  data: TestSortData[];
  sort: keyof TestSortData;
  expected: TestSortData[];
}
interface TestSortData {
  a: string;
  b: string;
  c: string;
}
