import { MenuItem } from './menuitem.model';
/**
 * Meal items. Served with fries many times.
 */
export interface FoodItemwFries extends MenuItem {
    description?: string;
    types?: string;
    note?: string;
    includesFries: boolean;
}
