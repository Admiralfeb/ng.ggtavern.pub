import { MenuItem } from './menuitem.model';
export interface MiscFoodItem extends MenuItem {
    description: string;
    note?: string;
    types?: string;
}
