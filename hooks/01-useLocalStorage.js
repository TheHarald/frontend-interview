// Задача: реализовать хук useLocalStorage(key, initialValue).
// - При монтировании читать значение из localStorage (по key); если нет — initialValue.
// - При изменении значения через setValue — сохранять в localStorage и обновлять state.
// - Учесть, что при SSR или первом рендере localStorage может быть недоступен.
//
// Пример: const [name, setName] = useLocalStorage('userName', 'Guest');


export function useLocalStorage(key, initialValue) {
  // TODO
}
