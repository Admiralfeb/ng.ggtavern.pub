import { MenuItem } from './menuitem.model';
/**
 * Misc Food Items like treats and bits.
 */
export interface MiscFoodItem extends MenuItem {
    description: string;
    note?: string;
    types?: string;
}
