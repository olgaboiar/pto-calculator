import React from 'react'
import Description from './Description'
import Greeting from './Greeting'

class App extends React.Component {
  render () {
    return (
      <div>
        <Greeting />
        <Description />
      </div>
    )
  }
}

export default App
