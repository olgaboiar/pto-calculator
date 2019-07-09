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
    if (this.state.ptoHours) {
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
                    <p>You have {this.state.ptoHours} PTO hours, which equals to {Math.round((this.state.ptoHours / 8)*2)/2} vacation days.</p>
                  </Col>
                </Row>
              </div>
					</Card>
				</Col>
			</Row>
      )}
    return null;
  }
}

export default Pto;
