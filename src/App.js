import React from 'react';
import './App.css'
import Auth from './Auth'
import UserData from './UserData'

const App = (props) => (
  <Auth>
    <div>
      <UserData></UserData>
    </div>
  </Auth>
)

export default App
