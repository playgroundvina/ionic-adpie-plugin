import { registerPlugin } from '@capacitor/core';
const CapacitorPluginAdPie = registerPlugin('CapacitorPluginAdPie', {
    web: () => import('./web').then(m => new m.CapacitorPluginAdPieWeb()),
});
export * from './definitions';
export { CapacitorPluginAdPie };
//# sourceMappingURL=index.js.map