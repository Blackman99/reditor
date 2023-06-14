export function insertBefore<T>(array: Array<T>, idx: number, item: T) {
  array.splice(idx, 1, item, array[idx])
}

export function insertAfter<T>(array: Array<T>, idx: number, item: T) {
  array.splice(idx, 1, array[idx], item)
}

export function ensureAtLeastOneAfterDelete<T>(array: Array<T>, idx: number, itemCreator: () => T) {
  array.splice(idx, 1)
  if (array.length < 1)
    array.push(itemCreator())
}
