import { createSelector } from 'reselect'
import { hhmm } from '../helpers/constants'
import { getDay } from '../helpers/Months';
var moment = require('moment');
import 'moment/locale/pt-br.js';

function getItems(store) {
    if(store.itemsReducer[0].items.length < 7 && store.itemsReducer[1]){
        return store.itemsReducer[0].items.concat(store.itemsReducer[1].items)
    }
    return store.itemsReducer[0].items
}
const getLastSevenItems = createSelector(
    getItems,
    (items) => items.slice(0, 7).map(item => { // Usamos os 7 primeiros elementos do array e sempre adicionamos novos itens no começo do array (com unshift)
        const newItem = {
            ...item,
            productionTimeHHmm: hhmm(item.productionTime),
            restingTimeHHmm: hhmm(item.restingTime),
            productionTimeH: item.productionTime / 3600,
            restingTimeH: item.restingTime / 3600,
            weekDayDDD: (new Date(item.day)).getDate() + "\n" + getDay(moment(item.day).day()).substring(0, 3),
        }
        return newItem
    }).sort((a, b) => new Date(a.day) - new Date(b.day))
)


module.exports = {
    getLastSevenItems
}

