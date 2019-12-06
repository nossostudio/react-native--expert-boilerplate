
import { APP_WENT_TO_BACKGROUND, APP_CAME_TO_FOREGROUND } from '../actions'

let newState
export default function appStateReducer(state = { state: null }, action) {
  switch (action.type) {
    case APP_WENT_TO_BACKGROUND:
      newState = {
        state: 'background'
      }
      return newState
    case APP_CAME_TO_FOREGROUND:
      newState = {
        state: 'foreground'
      }
      return newState
    default:
      return state
  }
}
