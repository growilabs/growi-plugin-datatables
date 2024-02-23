/**
 * Extend type because 'pre' cannot be set in Config's order
 */
import type { Config, Order } from 'datatables.net-bs4';

interface ConfigWeaken extends Config {
  order?: any;
}

type OrderExtend = Order | 'pre';
