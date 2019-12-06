
import { SET_CURRENT_ITEM } from '../actions'

let newState
export default function currentItemReducer(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_ITEM:
      newState = {
        ...state,
        ...action.item
      }
      return newState
    default:
      return state
  }
}
