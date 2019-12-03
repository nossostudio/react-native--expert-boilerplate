import * as actions from '../src/actions'
import { itemReducer } from '../src/reducers'

describe('Item Actions', () => {
  it('should create an action to add an item', () => {
    const newItem = { productionTime: 123, restingTime: 321 }
    const action = actions.addItem(newItem)
    expect(action).toEqual({
      type: actions.ADD_ITEM,
      item: {
        ...action.item,
        productionTime: 123,
        restingTime: 321
      }
    })
  })

  it('should create and action to update an item', () => {
    const itemToBeUpdated = { bora: 'bahea' }
    const action = actions.updateItem(itemToBeUpdated)
    expect(action).toEqual({
      type: actions.UPDATE_ITEM,
      item: {
        ...action.item,
        bora: 'bahea'
      }
    })
  })
})

describe('Item Reducers', () => {
  it('should return initial state', () => {
    expect(itemReducer(undefined, { type: null })).toEqual([])
  })

  it('should handle add item', () => {
    const newItem = { bora: 'bahea' }
    expect(itemReducer([], {
      type: actions.ADD_ITEM,
      item: newItem
    })).toEqual([{
      ...newItem,
      date: expect.any(Date),
      id: expect.any(String)
    }])
  })

  it('should handle update item', () => {
    const itemToBeUpdated = { id: 'awefrandomidreactnativeisawesome', bora: 'bahia' }
    expect(itemReducer([{
      bora: 'bahea',
      id: 'awefrandomidreactnativeisawesome',
      date: new Date()
    }],
    {
      type: actions.UPDATE_ITEM,
      item: itemToBeUpdated
    })
    ).toEqual([{
      ...itemToBeUpdated,
      date: expect.any(Date)
    }])
  })
})
