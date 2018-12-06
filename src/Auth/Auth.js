import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import Forms from './Forms'

import { connect } from 'react-redux'
import {
    initAuthChangeListeningAsyncAction,
    logOutAsyncAction,
    logInByGoogleAsyncAction,
    logInAsyncAction
} from '../state/auth'

class Auth extends React.Component {
    state = {
        email: '',
        password: ''
    }

    componentDidMount() {
        this.props._initAuthChangeListeningAsyncAction()
    }

    render() {
        return (
            this.props._isUserLoggedIn ?
                <div>
                    <FloatingActionButton
                        style={{
                            position: 'fixed',
                            top: 10,
                            right: 10,
                            zIndex: 9999,
                            color: 'white'
                        }}
                        secondary={true}
                        onClick={this.props._logOutAsyncAction}
                    >
                        X
          </FloatingActionButton>
                    {this.props.children}
                </div>
                :
                <Forms
                    email={this.props._email}
                    onEmailChangeHandler={this.onEmailChangeHandler}
                    password={this.props._password}
                    onPasswordChangeHandler={this.onPasswordChangeHandler}
                    onLogInClick={() => this.props._logInAsyncAction(this.state.auth.email, this.state.password)}
                    onLogInByGoogleClick={this.props._logInByGoogleAsyncAction}
                />
        )
    }
}

const mapStateToProps = state => ({
    _isUserLoggedIn: state.auth.isUserLoggedIn,
    _email: state.auth.email,
    _password: state.auth.password
})

const mapDispatchToProps = dispatch => ({
    _initAuthChangeListeningAsyncAction: () => dispatch(initAuthChangeListeningAsyncAction()),
    _logOutAsyncAction: () => dispatch(logOutAsyncAction()),
    _logInByGoogleAsyncAction: () => dispatch(logInByGoogleAsyncAction()),
    _logInAsyncAction: (email, password) => dispatch(logInAsyncAction(email, password))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)
