import React from 'react'
import Description from './Description'
import Greeting from './Greeting'
import axios from 'axios';
import PtoCalculator from './PtoCalculator';



class App extends React.Component {
  componentDidMount() {
    const csrfToken = document.querySelector('[name="csrf-token"]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
  }

  render () {
    return (
      <div className="container">
        <Greeting />
        <Description />
        <PtoCalculator />
      </div>
    )
  }
}

export default App
