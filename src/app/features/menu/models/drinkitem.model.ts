import { MenuItem } from './menuitem.model';
/**
 * Drinks made by GGTavern. Includes Shots and Specialties.
 */
export interface DrinkItem extends MenuItem {
    ingredients?: string;
    note?: string;
}
