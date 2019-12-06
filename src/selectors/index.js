import { createSelector } from 'reselect'

function getItems(store) {
    return store.itemsReducer
}
const getFirstSevenItems = createSelector(
    getItems,
    (items) =>
        items.slice(0, 7) //Get first 7 items only
            //.map(item => { //Map your items if you need
            //    return item
            //})
            //.sort((a, b) => new Date(a.day) - new Date(b.day)) //Order your items if you need
)



module.exports = {
    getFirstSevenItems
}

