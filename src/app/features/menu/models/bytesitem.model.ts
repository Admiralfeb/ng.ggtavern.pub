import { MenuItem } from './menuitem.model';
export interface BytesItem extends MenuItem {
    description?: string;
    types?: string;
    note?: string;
    includesFries: boolean;
}
