import React from 'react';
import { Row, Col, Card, Button } from 'react-materialize';

class Employee extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: this.props.currentUser
    }
  }

  render () {
    console.log("cur user from empl view")
    console.log(this.state.currentUser)
    return (
      <div className="container blue lighten-4">
        <Row>
          <Col m={1} s={12} offset={"m11"}>
            <Button waves="light" node="a" href="/users/sign_out" data-method="delete">Logout</Button>
          </Col>
        </Row>
        <Row></Row>
      </div>
			
			// 	<Col m={6} s={12} offset={"m3"}>
			// 		<Card
			// 			className="center-align"
			// 			header={<CardTitle image={require('../../assets/images/sun.jpeg')}/>}
			// 			actions={[<a
			// 				className="blue-text text-lighten-3"
			// 				href={"/users/sign_in"}>Please log in to be able to see your PTO</a>]}
			// 		>
			// 			<div>
			// 				<Row>
			// 					<Col>
			// 						<img src={"https://8thlight.com/images/logos/logo-color-ddaacb3d.svg"} />
			// 					</Col>
			// 					  <h4>Welcome to PTO Calculator</h4>
			// 				</Row>
			// 				<h5 className="blue-text text-lighten-1">The only tool that brings your vacation closer!</h5>
			// 			</div>
			// 		</Card>
			// 	</Col>
    )
  }
}

export default Employee
