const INPUT_TEXT = 'userData/INPUT_TEXT'

const INITIAL_STATE = {
    text: ''
}

export const inputText = newTextValue => ({
    type: INPUT_TEXT,
    newTextValue
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_TEXT:
            return {
                ...state,
                newTextValue: action.newTextValue
            }
        default:
            return state
    }
}