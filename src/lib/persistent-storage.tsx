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
   * @param key - Key associated with the value to retrieve
   * @returns Value associated with the given key if it exists, else returns undefined
   */
  getItem(key: string) {
    // Retrieve item from local storage
    const item = localStorage.getItem(key);

    if (item === null) return undefined;

    if (item === "null") return null;
    if (item === "undefined") return undefined;

    // Parse and return item as JSON
    return JSON.parse(item);
  }

  /**
   * Sets item in browser cache (provided a valid key-value pair is given)
   * @param key - Key for the value to store
   * @param value - Value to store
   */
  setItem(key: string, value: any) {
    if (value === undefined) {
      // If value is undefined, remove the key from local storage
      localStorage.removeItem(key);
    } else {
      // Otherwise, store the key-value pair in local storage
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  /**
   * Removes item from cache
   * @param key - Key of the item to remove
   * @returns Nothing
   */
  removeItem(key: string): void {
    if (key.trim().length === 0) {
      return;
    }

    // Remove item associated with the key from local storage
    localStorage.removeItem(key);
  }

  /**
   * Removes all items from local storage
   */
  public wipeLocalStorage() {
    localStorage.clear();
  }
}

/**
 * Mock storage class implements the PersistentStorage interface,
 * but doesn't perform any operation. Useful for testing purposes.
 */
class MockStorage implements PersistentStorage {
  getItem() {
    return null;
  }
  setItem() {}
  setJwtToken() {}

  removeItem(key: string) {}
  wipeLocalStorage() {}
}

// Choose an implementation of PersistentStorage depending on whether window.localStorage is available
const persistentStorage = window?.localStorage
  ? new LocalStorage()
  : new MockStorage();
export { persistentStorage };
