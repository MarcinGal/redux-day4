import React from 'react'
import TextField from 'material-ui/TextField'

import { typeText } from './state/userData'

const UserData = (props) => (
    <TextField
        hintText="Type your text"
    ></TextField>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default UserData