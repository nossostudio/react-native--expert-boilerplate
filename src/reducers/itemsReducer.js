
import { ADD_ITEM, UPDATE_ITEM, GET_ITEMS } from '../actions';
import _ from 'lodash';
const nanoid = require('nanoid/non-secure'); // https://github.com/ai/nanoid
import itemsMock from './items.mock'

var newItems;
export default function itemsReducer(state = itemsMock, action) {
  switch (action.type) {
    case ADD_ITEM:
      let currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      let currentItems = _.clone(state.filter(item => item.month.getMonth() === currentDate.getMonth())) || [];
      if (currentItems.length > 0) {
        if (currentItems[0].items.filter(item => item.day.getDay() === currentDate.getDay()).length === 0)
          currentItems[0].items.push({ day: currentDate, ...action.item });
        else {
          let obj = currentItems[0].items.find(item => item.day.getDay() === currentDate.getDay());
          if (obj) {
            obj = { ...action.item, day: currentDate };
            currentItems[0].items.splice(currentItems[0].items.lastIndexOf(), 1);
            currentItems[0].items.push(obj);
          }
        }
      } else
        currentItems.push({
          month: new Date(currentDate.getFullYear(), currentDate.getMonth()),
          items: [{ day: currentDate, ...action.item }]
        });
      newItems = _.merge(state, currentItems);
      return newItems
    case UPDATE_ITEM:
      newItems = [...state];
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
        return { title: key, data: groupedItems[key] }
      });
      return newItems
    default:
      return state
  }
}
