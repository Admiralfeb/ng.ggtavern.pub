import { MenuItem } from './menuitem.model';
export interface FoodItemwFries extends MenuItem {
    description?: string;
    types?: string;
    note?: string;
    includesFries: boolean;
}
