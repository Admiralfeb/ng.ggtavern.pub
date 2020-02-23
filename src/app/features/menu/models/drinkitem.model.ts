import { MenuItem } from './menuitem.model';
/** Drink items, includes shots and specialties */
export interface DrinkItem extends MenuItem {
    /** ingredients of the beverage */
    ingredients?: string;
    /** special notes, if applicable */
    note?: string;
}
