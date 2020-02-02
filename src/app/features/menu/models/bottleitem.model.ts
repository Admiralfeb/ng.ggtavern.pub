import { MenuItem } from './menuitem.model';
/**
 * Items served bottled or canned.
 */
export interface BottleItem extends MenuItem {
    ABV: string;
}
