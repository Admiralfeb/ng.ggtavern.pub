import { ID } from '@shared/id.model';

/**
 * Base menu item. Extended by other menu items.
 */
export interface MenuItem extends ID {
    name: string;
    price?: string;
}
