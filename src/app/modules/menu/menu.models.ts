export interface MenuItem {
    name: string;
    price?: string;
    ingredients?: string;
    note?: string;
    ABV?: string;
    pricepint?: string;
    pricemug?: string;
    types?: string;
    description?: string;
    includesFries?: boolean;
}

export interface SpecialtyItem {
    name: string;
    price: string;
    ingredients?: string;
    note?: string;
}

export interface TapItem {
    name: string;
    pricePint: string;
    priceMug: string;
    ABV: string;
}

export interface ShotsItem {
    name: string;
    price: string;
    ingredients: string;
    note?: string;
}

export interface BottleItem {
    name: string;
    price: string;
    ABV: string;
}

export interface WineItem {
    name: string;
    price: string;
    types?: string;
}

export interface LiquorItem {
    name: string;
    type: string;
    note?: string;
    ABV: string;
    price?: string;
}

export enum LiquorType {
    'brandy', 'gin', 'liqueur', 'rum', 'schnapps', 'tequila', 'vodka', 'whiskey', ''
}

export interface MiscFoodItem {
    name: string;
    price: string;
    description: string;
    note?: string;
    types?: string;
}

export interface BytesItem {
    name: string;
    price: string;
    description?: string;
    types?: string;
    includesFries: boolean;
}

