import * as actions from '../src/actions'

describe('addItem', () => {
    it('should create an action to add an item', () => {
        const newItem = { bora: "bahea" }
        const expectedAction = {
            type: actions.ADD_ITEM,
            item: newItem
        }
        expect(actions.addItem(newItem)).toEqual(expectedAction)
    })
})