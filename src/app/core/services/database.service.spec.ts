import { DatabaseService } from './database.service';
import { AngularFirestore, Query } from '@angular/fire/firestore';
import { TestBed } from '@angular/core/testing';
import firebase from 'firebase';
import { Observable, of } from 'rxjs';

describe('DatabaseService', () => {
  let service: DatabaseService;


  const sortTestData: TestData[] = [
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
  const someData: firebase.firestore.QuerySnapshot = {
    docs: [
      {
        data: () => sortTestData[0],
        exists: true,
        ref: null,
        id: null,
        metadata: null,
        get: null,
        isEqual: null
      },
      {
        data: () => sortTestData[1],
        exists: true,
        ref: null,
        id: null,
        metadata: null,
        get: null,
        isEqual: null
      },
      {
        data: () => sortTestData[2],
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

  const blankObservable = of(blankData);
  const someObservable = of(someData);

  const someSpy = {
    get: jasmine.createSpy('get').and.returnValue(someObservable)
  };
  const firestoreSomeSpy = {
    collection: jasmine.createSpy('collection').and.returnValue(someSpy)
  };

  const blankSpy = {
    get: jasmine.createSpy('get').and.returnValue(blankObservable)
  };
  const firestoreBlankSpy = {
    collection: jasmine.createSpy('collection').and.returnValue(blankSpy)
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFirestore, useValue: firestoreSomeSpy },
      ]
    });
    service = TestBed.get(DatabaseService);
  });

  afterEach(() => {
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get an empty array when collection is empty', async (done) => {
    TestBed.overrideProvider(AngularFirestore, { useValue: firestoreBlankSpy });
    service = TestBed.get(DatabaseService);
    const items = await service.getItems('');
    expect(items).toEqual([]);
    done();
  });

  it('should get an array of test items', async (done) => {
    TestBed.overrideProvider(AngularFirestore, { useValue: firestoreSomeSpy });
    service = TestBed.get(DatabaseService);

    const items = await service.getItems('');
    console.log({ items });
    done();
  });





  sortTestData.forEach(test => {
    it(`should sort ${test.test}`, () => {
      const returned = service.sortItems(test.data, test.sort);
      expect(returned).toEqual(test.expected);
    });

  });

  it('should not sort incongruous items', () => {
    const returned = service.sortItems([{ twi: 'whoo' }, { la: 'yay' }, { bob: 'not a god' }], 'bob');
    expect(returned).toEqual([{ twi: 'whoo' }, { la: 'yay' }, { bob: 'not a god' }]);
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
