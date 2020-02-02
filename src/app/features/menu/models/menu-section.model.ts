import { BottleItem } from './bottleitem.model';
import { FoodItemwFries } from './foodItemwfries.model';
import { LiquorItem } from './liquoritem.model';
import { MiscFoodItem } from './miscfooditem.model';
import { DrinkItem } from './drinkitem.model';
import { TapItem } from './tapitem.model';
import { WineItem } from './wineitem.model';
import { ID } from '@shared/id.model';

/**
 * Section of the Menu with items.
 */
export interface MenuSection extends ID {
    items: BottleItem[] | FoodItemwFries[] | LiquorItem[] | MiscFoodItem[] | DrinkItem[] | TapItem[] | WineItem[];
    name: string;
    section: string;
    type: string;
}
