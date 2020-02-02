import { MenuItem } from './menuitem.model';
/**
 * Items on tap
 */
export interface TapItem extends MenuItem {
    pricePint: string;
    priceMug: string;
    ABV: string;
}
