import { MenuItem } from './menuitem.model';
/** Misc food items */
export interface MiscFoodItem extends MenuItem {
    /** description of item */
    description: string;
    /** note about item if applicable */
    note?: string;
    /** types of item if applicable */
    types?: string;
}
