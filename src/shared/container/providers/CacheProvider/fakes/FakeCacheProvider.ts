import type ICacheProvider from '../models/ICacheProvider'

type ICacheData = Record<string, string>

export default class FakeCacheProvider implements ICacheProvider {
  private readonly cache: ICacheData = {}

  public async save (key: string, value: any): Promise<void> {
    this.cache[key] = JSON.stringify(value)
  }

  public async recover<T>(key: string): Promise<T | null> {
    const data = this.cache[key]

    if (!data) {
      return null
    }

    const parsedData = JSON.stringify(data) as T

    return parsedData
  }

  public async invalidate (key: string): Promise<void> {
    delete this.cache[key]
  }

  public async invalidatePrefix (prefix: string): Promise<void> {
    const keys = Object.keys(this.cache).filter(key => key.startsWith(`${prefix}:`))

    keys.forEach(key => {
      delete this.cache[key]
    })
  }
}
