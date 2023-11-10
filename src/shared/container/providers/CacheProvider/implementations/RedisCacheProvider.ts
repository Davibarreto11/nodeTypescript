import ICacheProvider from "../models/ICacheProvider"

export default class RedisCacheProvider implements ICacheProvider {
  constructor() {}

  save (key: string, value: string): Promise<void> {}

  recover (key: string): Promise<string> {}

  invalidate (key: string): Promise<void> {}
}
