const nanoid = require('nanoid') //https://github.com/ai/nanoid
import { ADD_ITEM, UPDATE_ITEM } from '../actions'

export default function itemReducer(items = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      var newItems = [...items]
      newItems.push({
        ...action.item,
        id: nanoid(),
        date: new Date()
      })
      return newItems
    case UPDATE_ITEM:
      var newItems = [...items]
      newItems = newItems.map(item => {
        if (item.id == action.item.id) {
          const updatedItem = {
            ...item,
            ...action.item
          }
          return updatedItem
        } else {
          return item
        }
      })
      return newItems
    default:
      return items
  }
}
