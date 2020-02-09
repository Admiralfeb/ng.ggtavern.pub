import { Injectable } from '@angular/core';

/**
 * This service provides more advanced sorting ability.
 */
@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  /**
   * Sorts provided items and returns a new array
   * @param items array of items to sort
   * @param prop property to sort the items by
   */
  sortItems<T, P extends keyof T>(items: T[], prop: P): T[] {
    try {
      return items.sort(this.comparer(prop));
    } catch {
      return items;
    }
  }

  /**
   * Sorts provided items and returns a new array
   * @param items array of items to sort
   * @param prop property to sort the items by
   */
  sortItemsReverse<T, P extends keyof T>(items: T[], prop: P): T[] {
    try {
      return items.sort(this.comparerReverse(prop));
    } catch {
      return items;
    }
  }

  private comparer(prop) {
    return (a, b) => {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  }
  private comparerReverse(prop) {
    return (a, b) => {
      if (a[prop] < b[prop]) {
        return 1;
      } else if (a[prop] > b[prop]) {
        return -1;
      }
      return 0;
    };
  }
}
