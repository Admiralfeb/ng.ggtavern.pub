import { MenuItem } from './menuitem.model';
export interface DrinkItem extends MenuItem {
    ingredients?: string;
    note?: string;
}
