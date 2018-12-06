import { database } from '../firebaseConfig'

const INPUT_TEXT = 'userData/INPUT_TEXT'

export const inputText = newTextValue => ({
    type: INPUT_TEXT,
    newTextValue
})

export const saveTextToDbAsyncAction = () => (dispatch, getState) => {
    const text = getState().userData.text
    const uuid = getState().auth.user.uid

    database.ref(`users/${uuid}`).set({
        text
    })
}

const INITIAL_STATE = {
    text: ''
}

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