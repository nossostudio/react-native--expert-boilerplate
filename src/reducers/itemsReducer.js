
import { ADD_ITEM, UPDATE_ITEM, GET_ITEMS } from '../actions';
import _ from 'lodash';
const nanoid = require('nanoid/non-secure'); // https://github.com/ai/nanoid
import itemsMock from './items.mock'

var newItems;
let count = 0;
export default function itemsReducer(items = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      let currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      let currentItems = _.clone(items.filter(item => item.month.getMonth() === currentDate.getMonth())) || [];
      if (currentItems.length > 0) {
        if (currentItems[0].items.filter(item => item.day.getDay() === currentDate.getDay()).length === 0)
          currentItems[0].items.push({ day: currentDate, ...action.item });
        else {
          let obj = currentItems[0].items.find(item => item.day.getDay() === currentDate.getDay());
          console.log('==============obj')
          console.log(obj)
          console.log(++count)
          console.log('=============\n')
          if (obj) {
            currentItems[0].items[currentItems[0].items.lastIndexOf()] = { ...action.item };
            alert(currentItems[0].items[currentItems[0].items.lastIndexOf()].productionTime)
          }
        }
      } else
        currentItems.push({
          month: new Date(currentDate.getFullYear(), currentDate.getMonth()),
          items: [{ day: currentDate, ...action.item }]
        });
      newItems = currentItems;
      console.log('================================')
      console.log(_.difference(items, currentItems))
      console.log('================================')
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
        return { title: key, data: groupedItems[key] }
      });
      return newItems
    default:
      return items
  }
}
