import React from 'react'
import GuestView from './GuestView';
import EmployeeView from './EmployeeView';

// const csrfToken = document.querySelector('[name="csrf-token"]').content
// axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

class App extends React.Component {
  constructor(props){
    super(props);
    var user = (this.props.user) ? this.props.user : null
    this.state = {
      currentUser: user
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
    // this.menu.current.changePtoHoursValue(this.state.ptoHours);
    }

  updateCurrentUser(user) {
    this.setState({
      currentUser: user
      })
    }

  render () {
    let view;
    if (this.state.currentUser) {
      // view = <Profile currentUser={this.state.currentUser}/>
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
