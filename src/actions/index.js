export const ADD_ITEM = 'ADD_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item
  }
}

export function updateItem(item) {
  return {
    type: UPDATE_ITEM,
    item
  }
}
