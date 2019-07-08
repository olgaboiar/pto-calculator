import React from 'react';
import ProfileForm from './ProfileForm';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
      message: this.props.message
    }
  }

  render() {
    return (
      <div>
          <ProfileForm user={this.state.user} message={this.state.message}/>
      </div>
    )    
  }
}

export default Profile;
