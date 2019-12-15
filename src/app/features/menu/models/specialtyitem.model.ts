import { MenuItem } from './menuitem.model';
export interface SpecialtyItem extends MenuItem {
    ingredients?: string;
    note?: string;
}
