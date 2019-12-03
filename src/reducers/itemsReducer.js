
import { ADD_ITEM, UPDATE_ITEM } from '../actions'
import itemsMock from './items.mock'

let newState
let currentDate
let currentMonth
export default function itemsReducer (state = itemsMock, action) {
  switch (action.type) {
    case ADD_ITEM:
      currentDate = new Date(Date.now())
      currentMonth = state.find(item => (new Date(item.month)).getMonth() === currentDate.getMonth())
      if (currentMonth) {
        currentMonth.items.unshift(action.item) // unshift adds item to beginning
        newState = state.map(item => { // prepare newState with updated currentMonth
          return (new Date(item.month)).getMonth() === (new Date(currentMonth.month)).getMonth() ? currentMonth : item
        })
      } else {
        const newMonth = {
          month: new Date(currentDate.getFullYear(), currentDate.getMonth()),
          items: [action.item]
        }
        newState = [newMonth, ...state] // prepare newState with newMonth
      }
      return newState
    case UPDATE_ITEM:
      currentDate = new Date(Date.now())
      currentMonth = state.find(item => (new Date(item.month)).getMonth() === currentDate.getMonth())
      if (currentMonth.items.find(item => (new Date(item.day)).getDate() === currentDate.getDate())) { // If there is today
        const updatedItem = { ...action.item } // TODO: Update item
        currentMonth.items.splice(0, 1, updatedItem)
      }
      newState = state.map(item => { // prepare newState with updated item
        return (new Date(item.month)).getMonth() === (new Date(currentMonth.month)).getMonth() ? currentMonth : item
      })
      return newState
    default:
      return state
  }
}
