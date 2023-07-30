/**
 * Persistent storage outlines the set of actions
 * that can be performed against a caching utility
 */
export interface PersistentStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: any): void;
  removeItem(key: string): void;
  wipeLocalStorage(): void;
}

/**
 * Local storage provides access patterns and interactions
 * to browser cache
 */
class LocalStorage implements PersistentStorage {
  /**
   * Gets an item from browser cache based on key
   * @param key
   * @returns
   */
  getItem(key: string) {
    const item = localStorage.getItem(key);

    if (item === null) return undefined;

    if (item === "null") return null;
    if (item === "undefined") return undefined;

    return JSON.parse(item);
  }

  /**
   * Sets item in browser cache (provided a valid kvp is given)
   * @param key
   * @param value
   */
  setItem(key: string, value: any) {
    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  /**
   * Removes item from cache
   * @param key
   * @returns item
   */
  removeItem(key: string): void {
    if (key.trim().length === 0) {
      return;
    }

    localStorage.removeItem(key);
  }

  public wipeLocalStorage() {
    localStorage.clear();
  }
}

class MockStorage implements PersistentStorage {
  getItem() {
    return null;
  }
  setItem() {}
  setJwtToken() {}

  removeItem(key: string) {}
  wipeLocalStorage() {}
}

const persistentStorage = window?.localStorage
  ? new LocalStorage()
  : new MockStorage();
export { persistentStorage };
