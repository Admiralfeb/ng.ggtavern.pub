import { BottleItem } from './bottleitem.model';
import { FoodItemwFries } from './foodItemwfries.model';
import { LiquorItem } from './liquoritem.model';
import { MiscFoodItem } from './miscfooditem.model';
import { DrinkItem } from './drinkitem.model';
import { TapItem } from './tapitem.model';
import { WineItem } from './wineitem.model';

/** Menu Section to display */
export interface MenuSection {
    /** items in section */
    items: BottleItem[] | FoodItemwFries[] | LiquorItem[] | MiscFoodItem[] | DrinkItem[] | TapItem[] | WineItem[];
    /** name of the section */
    name: string;
    /** section short name for navigation */
    section: string;
    /** type of item list to display */
    type: string;
}
