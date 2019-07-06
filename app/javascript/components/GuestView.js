import React from 'react';
import { Row, Col, Card, CardTitle } from 'react-materialize';

class GuestView extends React.Component {
  render () {
    return (
			<Row>
				<Col m={6} s={12} offset={"m3"}>
					<Card
						header={<CardTitle image={require('../../assets/images/sun.jpeg')}/>}
						actions={[<a
							className="blue-text text-lighten-3"
							href={"/users/sign_in"}>Please log in to be able to see your PTO</a>]}
					>
						<div>
							<Row>
								<Col>
									<img src={"https://8thlight.com/images/logos/logo-color-ddaacb3d.svg"} />
								</Col>
								  <h4>Welcome to PTO Calculator</h4>
							</Row>
							<h5 className="blue-text text-lighten-1">The only tool that brings your vacation closer!</h5>
						</div>
					</Card>
				</Col>
			</Row>
    )
  }
}

export default GuestView
