import { MenuItem } from './menuitem.model';
export interface ShotsItem extends MenuItem {
    ingredients: string;
    note?: string;
}
