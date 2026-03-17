// Задача: реализовать хук usePagination(items, pageSize).
// - items — массив данных, pageSize — число элементов на странице.
// - Возвращать: { currentPage, totalPages, pageData, setPage, nextPage, prevPage }.
//   - pageData — срез items для текущей страницы.
//   - setPage(n) — перейти на страницу n (от 1 до totalPages).
//   - nextPage / prevPage — перейти на следующую/предыдущую (если возможно).
// - При смене items или pageSize сбрасывать currentPage на 1 (или оставить в допустимых границах).
//
// Пример: const { pageData, currentPage, totalPages, nextPage, prevPage } = usePagination(list, 10);

export function usePagination(items = [], pageSize = 10) {
  // TODO
}
