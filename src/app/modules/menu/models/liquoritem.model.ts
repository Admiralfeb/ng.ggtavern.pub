import { MenuItem } from './menuitem.model';
export interface LiquorItem extends MenuItem {
    type: string;
    note?: string;
    ABV: string;
}
