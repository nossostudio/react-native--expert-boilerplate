export const ADD_ITEM = 'ADD_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const GET_ITEMS = 'GET_ITEMS'
export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM'
export const HANDLE_ITEM = 'HANDLE_ITEM'
export const APP_WENT_TO_BACKGROUND = 'APP_WENT_TO_BACKGROUND'
export const APP_CAME_TO_FOREGROUND = 'APP_CAME_TO_FOREGROUND'

let _handleBackgroundTime = null
export function appCameToForeground(secondsSpent, isRunning) {
  _handleBackgroundTime && _handleBackgroundTime(secondsSpent, isRunning)

  return {
    type: APP_CAME_TO_FOREGROUND,
    time: 0
  }
}

export function appWentToBackground(time) {
  return {
    type: APP_WENT_TO_BACKGROUND,
    time
  }
}

export function dispatchCurrentItem(item, handleBackgroundTime) {
  if (_handleBackgroundTime === null) _handleBackgroundTime = handleBackgroundTime
  return (dispatch, getState) => {
    // Check if there is currentItem already
    const currentItem = getState().currentItemReducer
    const currentDay = new Date(Date.now())
    if (currentItem.productionTime !== undefined) {
      // Check if currentItem date is equal to the comming item
      if ((new Date(currentItem.day)).getMonth() === currentDay.getMonth() && (new Date(currentItem.day)).getDate() === currentDay.getDate()) {
        if (item.productionTime !== undefined) {
          // Sum productionTime and restingTime
          const updatedCurrentItem = {
            ...item,
            ...currentItem,
            productionTime: currentItem.productionTime + item.productionTime,
            restingTime: currentItem.restingTime + item.restingTime
          }
          dispatch(updateItem(updatedCurrentItem))
          dispatch(setCurrentItem(updatedCurrentItem))
        } else {
          dispatch(setCurrentItem(item))
        }
      } else { // Create new item as the currentItem is old
        if (item.productionTime !== undefined) { // When pressing play, dispatchCurrentItem is dispatched, but productionTime is undefined. It won't be undefined when the user presses stop
          dispatch(addItem(item))
        }
        dispatch(setCurrentItem(item))
      }
    } else {
      if (item.productionTime !== undefined) { dispatch(addItem(item)) } // When pressing play, dispatchCurrentItem is dispatched, but productionTime is undefined. It won't be undefined when the user presses stop
      dispatch(setCurrentItem(item))
    }
  }
}

export function setCurrentItem(item) {
  return {
    type: SET_CURRENT_ITEM,
    item: {
      day: new Date(Date.now()),
      ...item
    }
  }
}

export function addItem({ productionTime, restingTime }) {
  const item = {
    day: new Date(Date.now()),
    productionTime,
    restingTime
  }
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
