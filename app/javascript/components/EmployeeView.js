import React from 'react';
import Profile from './Profile';
import Pto from './Pto';
import { Row, Col, Button } from 'react-materialize';

class EmployeeView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: this.props.currentUser,
    }
  }

  render () {
    let message;
    if (this.state.user.profile.start_date && this.state.user.profile.current_position) {
      message = "Check if your profile needs updating"
    } else {
      message = "Please update your profile"
    }
    return (
      <div className="">
        <Row>
          <Col m={1} s={12} offset={"m11"}>
            <Button waves="light" node="a" href="/users/sign_out" data-method="delete">Logout</Button>
          </Col>
          <Col m={4} s={12} data-testid="pto">
            <Pto user={this.state.user}/>
          </Col>
          <Col m={7} s={12} data-testid="profile">
            <Profile message={message} user={this.state.user} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default EmployeeView
