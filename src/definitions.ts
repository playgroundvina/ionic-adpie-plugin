export interface CapacitorPluginAdPiePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
