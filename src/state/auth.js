import { auth } from '../firebaseConfig'
import { googleProvider } from '../firebaseConfig'

const LOG_IN = 'auth/LOG_IN'
const LOG_OUT = 'auth/LOG_OUT'
const EMAIL_CHANGE = 'AUTH/EMAIL_CHANGE'
const PASSWORD_CHANGE = 'AUTH/PASSWORD_CHANGE'

export const initAuthChangeListeningAsyncAction = () => (dispatch, getState) => {
    auth.onAuthStateChanged(
        user => {
            if (user) {
                dispatch(logInAction())
            } else {
                dispatch(logOutAction())
            }
        }
    )
}

export const logOutAsyncAction = () => (dispatch, getState) => {
    auth.signOut()
}

export const logInByGoogleAsyncAction = () => (dispatch, getState) => {
    auth.signInWithPopup(googleProvider)
}

export const logInAsyncAction = (email, password) => (dispatch, getState) => {
    auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
            alert('Something is wrong! Check console for error details!')
            console.log(error)
        })
}

const logInAction = () => ({ type: LOG_IN })
const logOutAction = () => ({ type: LOG_OUT })

export const EmailChangeAction = value => ({
    type: EMAIL_CHANGE,
    value
})
export const PasswordChangeAction = value => ({
    type: PASSWORD_CHANGE,
    value
})

const INITIAL_STATE = {
    isUserLoggedIn: false,
    email: 'placki',
    password: 'placki'
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isUserLoggedIn: true
            }
        case LOG_OUT:
            return {
                ...state,
                isUserLoggedIn: false
            }
        default:
            return state
    }
}
