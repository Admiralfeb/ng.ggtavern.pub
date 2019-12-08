import { MenuItem } from './menuitem.model';
export interface TapItem extends MenuItem {
    pricePint: string;
    priceMug: string;
    ABV: string;
}
