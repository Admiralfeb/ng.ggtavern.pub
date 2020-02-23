import { MenuItem } from './menuitem.model';
/** Food items that are normally served with fries */
export interface FoodItemwFries extends MenuItem {
    /** description of item */
    description?: string;
    /** multiple types if applicable */
    types?: string;
    /** notes for item if applicable */
    note?: string;
    /** true/false if includes fries */
    includesFries: boolean;
}
