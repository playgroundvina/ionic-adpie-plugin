import { WebPlugin } from '@capacitor/core';

import type { CapacitorPluginAdPiePlugin } from './definitions';

export class CapacitorPluginAdPieWeb
  extends WebPlugin
  implements CapacitorPluginAdPiePlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
