/**
 * Extend type because 'pre' cannot be set in Config's order
 */
import type { Config, Order } from 'datatables.net-bs5';

export interface ConfigWeaken extends Config {
  order?: any;
  // optimize type definition
  columnDefs?: any;
}

export type OrderExtend = Order | 'pre';
