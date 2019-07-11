import React from 'react';
import GuestView from './GuestView';
import EmployeeView from './EmployeeView';

class App extends React.Component {
  constructor(props) {
    super(props);
    let user;
    if (this.props.appState.user) {
      user = {
        user: this.props.appState.user,
        profile: this.props.appState.employee,
        pto: this.props.appState.pto,
        employment: this.props.appState.employment,
      };
    } else { null; }
    this.state = {
      currentUser: user,
    };
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  updateCurrentUser(user) {
    this.setState({
      currentUser: user,
    });
  }

  render() {
    let view;
    if (this.state.currentUser) {
      view = <EmployeeView currentUser={this.state.currentUser} />;
    } else {
      view = <GuestView />;
    }
    return (
      <div>
        {view}
      </div>
    );
  }
}

export default App;
