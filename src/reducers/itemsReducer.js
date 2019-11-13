
import { ADD_ITEM, UPDATE_ITEM, GET_ITEMS } from '../actions';
import _ from 'lodash';
const nanoid = require('nanoid/non-secure'); // https://github.com/ai/nanoid
import itemsMock from './items.mock'

var newItems;
export default function itemsReducer(items = itemsMock, action) {
  switch (action.type) {
    case ADD_ITEM:
      newItems = [...items];
      newItems.push({
        ...action.item,
        id: nanoid(),
        date: new Date()
      });
      return newItems
    case UPDATE_ITEM:
      newItems = [...items];
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
      });
      return newItems
    case GET_ITEMS:
      let groupedItems = _.groupBy(action.items, 'title');
      newItems = Object.keys(groupedItems).map((key) => {
        return {title: key, data: groupedItems[key]}
      });
      return newItems
    default:
      return items
  }
}
