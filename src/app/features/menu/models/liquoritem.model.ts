import { MenuItem } from './menuitem.model';
/**
 * Liquor items that can be mixed together or served alone.
 */
export interface LiquorItem extends MenuItem {
    type: string;
    note?: string;
    ABV: string;
    description?: string;
}
