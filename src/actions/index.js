import axios from 'axios';
export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const GET_ITEMS = 'GET_ITEMS';

export function addItem(productionTime, restingTime) {
  let item = {productionTime, restingTime};
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

export function getItemsAsnc(items) {
  return {
    type: GET_ITEMS,
    items
  }
}

export function getItems() {
  return dispatch => {
    axios.get('/timesheets').then(results => {
      dispatch(getItemsAsnc(results.data));
    }).catch(err => alert(err.message));
  }
}