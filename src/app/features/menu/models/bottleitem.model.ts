import { MenuItem } from './menuitem.model';
/** Items that are bottled */
export interface BottleItem extends MenuItem {
    /** alcoholic value */
    ABV: string;
}
