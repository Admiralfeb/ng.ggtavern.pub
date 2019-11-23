export interface MenuItem {
    name: string;
    price?: string;
}

export interface SpecialtyItem extends MenuItem {
    ingredients?: string;
    note?: string;
}

export interface TapItem extends MenuItem {
    pricePint: string;
    priceMug: string;
    ABV: string;
}

export interface ShotsItem extends MenuItem {
    ingredients: string;
    note?: string;
}

export interface BottleItem extends MenuItem {
    ABV: string;
}

export interface WineItem extends MenuItem {
    types?: string;
}

export interface LiquorItem extends MenuItem {
    type: string;
    note?: string;
    ABV: string;
}

export enum LiquorType {
    'brandy', 'gin', 'liqueur', 'rum', 'schnapps', 'tequila', 'vodka', 'whiskey', ''
}

export interface MiscFoodItem extends MenuItem {
    description: string;
    note?: string;
    types?: string;
}

export interface BytesItem extends MenuItem {
    description?: string;
    types?: string;
    includesFries: boolean;
}
