import React from 'react'
import TextField from 'material-ui/TextField'

import { inputText, saveTextToDbAsyncAction } from './state/userData'
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';

const UserData = (props) => (
    <div>
        <TextField
            hintText="Type your text"
            value={props._text}
            onChange={props._saveTextToDbAsyncAction}
        >
        </TextField>
        <RaisedButton
            label={'SAVE'}
            onClick={props._saveTextToDbAsyncAction}
        ></RaisedButton>
    </div>
)

const mapStateToProps = state => ({
    _text: state.userData.text
})

const mapDispatchToProps = dispatch => ({
    _inputText: event => dispatch(inputText(event.target.value)),
    _saveTextToDbAsyncAction: () => dispatch(saveTextToDbAsyncAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserData)