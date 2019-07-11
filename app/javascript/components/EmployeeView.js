import React from 'react';
import Pto from './Pto';
import { Row, Col, Button } from 'react-materialize';
import EmploymentHistoryForm from './EmploymentHistoryForm';

class EmployeeView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: this.props.currentUser
    }
  }

  render () {
    return (
      <div className=''>
        <Row>
          <Col m={1} s={12} offset={'m11'}>
            <Button waves='light' node='a' href='/users/sign_out' data-method='delete' data-testid='logout-link'>Logout</Button>
          </Col>
        </Row>
        <Row>
          <Col m={5} s={12} data-testid='pto'>
            <Pto user={this.state.user}/>
          </Col>
          <Col m={7} s={12} data-testid='employment'>
            <EmploymentHistoryForm user={this.state.user} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default EmployeeView
