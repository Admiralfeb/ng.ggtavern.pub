import { TestBed } from '@angular/core/testing';

import { SortService } from './sort.service';

describe('SortService', () => {
  let service: SortService;

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

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(SortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
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

  it('should return items on failed sort', () => {
    spyOn(Array.prototype, 'sort').and.throwError('oops');
    const items = service.sortItems([1, 2, 3], null);
    expect(items).toEqual([1, 2, 3]);
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
