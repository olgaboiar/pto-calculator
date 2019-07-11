import React from 'react';
import { Row, Col, Card, CardTitle } from 'react-materialize';

class Pto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      ptoHours: this.props.user.pto
    }
  }

  changePtoHoursValue = (hours) => {
    this.setState({
      ptoHours: hours
    })
  }

  render () {
    let message;
    if (this.state.ptoHours) {
      message = "You have " + this.state.ptoHours + " PTO hours, which equals to " + Math.round((this.state.ptoHours / 8)*2)/2 + " vacation days.";
    } else {
      message = "You don't have any accrued PTO. Check if your profile is up to date"
    }
    return (
      <Row>
        <Col s={12}>
          <Card
            className="center-align"
            horizontal
            header={<CardTitle image={require('../../assets/images/flamingo.jpeg')}/>}
          >
            <div>
              <Row>
                <Col>
                  <h5>{message}</h5>
                </Col>
              </Row>
            </div>
        </Card>
      </Col>
    </Row>
    )
  }
}

export default Pto;
