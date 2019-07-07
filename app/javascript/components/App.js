import React from 'react'
import axios from "axios";
import GuestView from './GuestView';
import EmployeeView from './EmployeeView';

// const csrfToken = document.querySelector('[name="csrf-token"]').content
// axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

class App extends React.Component {
  constructor(props){
    
    super(props);
    console.log(this.props.appState)
    let user;
    // var user = (this.props.appState.user) ? this.props.appState.user : null
    if (this.props.appState.user) {
      user = {
        user: this.props.appState.user,
        profile: this.props.appState.employee
      }
    } else { null }
    this.state = {
      currentUser: user
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
    }

  updateCurrentUser(user) {
    this.setState({
      currentUser: user
      })
    }

  render () {
    let view;
    if (this.state.currentUser) {
      view = <EmployeeView currentUser={this.state.currentUser}/>
    } else {
      view = <GuestView />
    }
    return (
      <div>
        {view}
      </div>
    )
  }
}

export default App
