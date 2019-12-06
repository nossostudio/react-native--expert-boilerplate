export const ADD_ITEM = 'ADD_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const APP_WENT_TO_BACKGROUND = 'APP_WENT_TO_BACKGROUND'
export const APP_CAME_TO_FOREGROUND = 'APP_CAME_TO_FOREGROUND'

export function appCameToForeground(payload) {
  return {
    type: APP_CAME_TO_FOREGROUND,
    payload //Boilerplate example
  }
}

export function appWentToBackground(payload) {
  return {
    type: APP_WENT_TO_BACKGROUND,
    payload //Boilerplate example
  }
}


export function addItem(item) {
  return {
    type: ADD_ITEM,
    item //Boilerplate example
  }
}

export function updateItem(item) {
  return {
    type: UPDATE_ITEM,
    item //Boilerplate example
  }
}
