import { registerPlugin } from '@capacitor/core';

import type { CapacitorPluginAdPiePlugin } from './definitions';

const CapacitorPluginAdPie = registerPlugin<CapacitorPluginAdPiePlugin>(
  'CapacitorPluginAdPie',
  {
    web: () => import('./web').then(m => new m.CapacitorPluginAdPieWeb()),
  },
);

export * from './definitions';
export { CapacitorPluginAdPie };
