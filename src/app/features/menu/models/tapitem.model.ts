import { MenuItem } from './menuitem.model';
/** Item on Tap */
export interface TapItem extends MenuItem {
    /** price for the pint (16oz) size */
    pricePint: string;
    /** price for the mug (32oz) size */
    priceMug: string;
    /** alcoholic percentage */
    ABV: string;
}
