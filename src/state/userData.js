const INPUT_TEXT = 'userData/INPUT_TEXT'

const INITIAL_STATE = {
    text: ''
}

export const typeText = text => ({
    type: INPUT_TEXT,
    text
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_TEXT:
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}