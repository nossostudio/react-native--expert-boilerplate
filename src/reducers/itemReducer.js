import { ADD_ITEM } from '../actions'

const cloneStateObject = function (state) {
  const clone = JSON.parse(JSON.stringify(state))
  return clone
}

let newState = {
  items: []
}

export function itemReducer (state, action) {
  switch (action.type) {
    case ADD_ITEM:
      newState = cloneStateObject(state)
      newState.items.push(action.item)
      return newState
    default:
      return state || newState
  }
}
