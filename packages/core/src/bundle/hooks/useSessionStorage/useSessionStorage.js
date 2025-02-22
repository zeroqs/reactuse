import { useStorage } from '../useStorage/useStorage';
/**
 * @name useSessionStorage
 * @description - Hook that manages session storage value
 * @category Browser
 *
 * @template Value The type of the value
 * @param {string} key The key of the storage
 * @param {UseStorageInitialValue<Value>} [initialValue] The initial value of the storage
 * @param {UseStorageOptions<Value>} [options] The options of the storage
 *
 * @example
 * const { value, set, remove } = useSessionStorage('key', 'value');
 */
export const useSessionStorage = (key, initialValue, options) =>
  useStorage(key, { initialValue, storage: window.sessionStorage, ...options });
