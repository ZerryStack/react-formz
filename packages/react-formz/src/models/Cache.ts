class Cache<Key, Value> {
  #max: number = 1000;
  #map = new Map<Key, Value>();

  constructor(max: number = 1000) {
    this.#max = max;
  }

  public add(key: Key, value: Value) {
    const size = this.#map.size;

    if (size > this.#max) {
      this.deleteFirstItem();
    }

    this.#map.set(key, value);
  }

  public get(key: Key) {
    return this.#map.get(key);
  }
  
  public has(key: Key) {
    return this.#map.has(key);
  }

  public remove(key: Key) {
    return this.#map.delete(key);
  }

  private deleteFirstItem() {
    const keys = [...this.#map.keys()];
    const firstKey = keys[0];
    this.#map.delete(firstKey);
  }
}

export default Cache;
