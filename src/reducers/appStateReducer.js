
import { APP_WENT_TO_BACKGROUND, APP_CAME_TO_FOREGROUND } from '../actions'

let newState
export default function appStateReducer (state = null, action) {
  switch (action.type) {
    case APP_WENT_TO_BACKGROUND:
      newState = {
        startTime: action.time
      }
      return newState
    case APP_CAME_TO_FOREGROUND:
      // Should the state be clean?
      return state
    default:
      return state
  }
}
