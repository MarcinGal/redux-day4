import React from 'react'
import TextField from 'material-ui/TextField'

import { inputText } from './state/userData'
import { connect } from 'react-redux';

const UserData = (props) => (
    <div>
        <TextField
            hintText="Type your text"
            value={props._text}
            onChange={props._inputText}
        >
        </TextField>
    </div>
)

const mapStateToProps = state => ({
_text: state.userData.text
})

const mapDispatchToProps = dispatch => ({
    _inputText: event => dispatch(inputText(event.target.value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserData)