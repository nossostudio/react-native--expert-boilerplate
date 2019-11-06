
import { ADD_ITEM, UPDATE_ITEM } from '../actions'
const nanoid = require('nanoid/non-secure') // https://github.com/ai/nanoid

var newItems
export default function itemReducer (items = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      newItems = [...items]
      newItems.push({
        ...action.item,
        id: nanoid(),
        date: new Date()
      })
      return newItems
    case UPDATE_ITEM:
      newItems = [...items]
      newItems = newItems.map(item => {
        if (item.id === action.item.id) {
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
