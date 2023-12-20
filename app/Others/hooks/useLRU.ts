import { ProductType } from "@/app/@types";
import { create } from "zustand";

export interface CacheItem {
  key: string;
  value: ProductType;
}

class LRUCache {
  capacity: number;
  cache: CacheItem[];

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = [];
  }

  isCacheFull() {
    return this.cache.length === this.capacity;
  }

  setItem(key: string, value: any) {
    if (this.isCacheFull()) {
      this.cache.pop();
    }
    this.cache.unshift({ key, value });
  }

  getItem(key: string) {
    const cacheItem = this.cache.find((item) => item.key === key);

    return cacheItem ? cacheItem.value : undefined;
  }
}

interface LRUStore {
  cache: CacheItem[];
  setItem: (key: string, value: any) => void;
  getItem: (key: string) => any;
}

const useLRU = create<LRUStore>((set) => {
  const totalCache = new LRUCache(5);

  return {
    cache: totalCache.cache,
    set: ({ cache }: { cache: CacheItem[] }) => {
      totalCache.cache = [...cache];
    },

    setItem: (key: string, value: any) => {
      const existingIndex = totalCache.cache.findIndex(
        (item) => item.key === key
      );

      //if key not found add the item
      if (existingIndex === -1) totalCache.setItem(key, value);
      else totalCache.cache[existingIndex].value = value;

      set({ cache: [...totalCache.cache] });
    },
    getItem: (key: string) => {
      totalCache.getItem(key);
    },
  };
});
export default useLRU;
