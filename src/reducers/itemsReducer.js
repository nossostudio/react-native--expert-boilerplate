
import { ADD_ITEM, UPDATE_ITEM } from '../actions'

let newState
export default function itemsReducer(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = action.payload //Boilerplate example
      newState = [...state, newItem]
      return newState
    case UPDATE_ITEM:
      const updatedItem = state.find(item => item.id === action.payload.id)
      newState = state.map(item => { //Go through all itens and change the item
        if (item.id === action.payload.id) {
          return updatedItem
        } else {
          return item
        }
      })
      return newState
    default:
      return state
  }
}
