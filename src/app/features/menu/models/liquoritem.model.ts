import { MenuItem } from './menuitem.model';
/** Available Liquors */
export interface LiquorItem extends MenuItem {
    /** Type of liquor */
    type: string;
    /** special notes if applicable */
    note?: string;
    /** alcoholic value of liquor */
    ABV: string;
    /** description if applicable */
    description?: string;
}
