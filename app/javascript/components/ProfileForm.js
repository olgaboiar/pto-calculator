import React from 'react';
import moment from "moment";
import InputDate from './InputDate';
import InputSelect from './InputSelect';
import HttpClient from './HttpClient';
import { Button, Row, Col } from 'react-materialize';

const positionOptions = [
  { value: 'crafter', label: 'Crafter' },
  { value: 'apprentice', label: 'Apprentice' }
]

const locationOptions = [
  { value: 'IL', label: 'IL' },
  { value: 'LA', label: 'LA' },
  { value: 'NY', label: 'NY' }
]

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.user.user.id,
      startDate: this.props.user.profile.start_date || moment("2019-01-01").toDate(),
      positionOptions: positionOptions,
      currentPosition: this.props.user.profile.current_position || positionOptions[1].value,
      startingPosition: this.props.user.profile.starting_position || positionOptions[1].value,
      locationOptions: locationOptions,
      location: this.props.user.profile.location || locationOptions[1].value,
      graduationDate: this.props.user.profile.graduation_date || null
    },

    this.changeCurrentPosition = this.changeCurrentPosition.bind(this);
    this.changeStartingPosition = this.changeStartingPosition.bind(this);
    this.changeLocation = this.changeLocation.bind(this); 
    this.changeStartDate = this.changeStartDate.bind(this);
    this.changeGraduationDate = this.changeGraduationDate.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);
  }


  changeCurrentPosition = position => {
    this.setState({ currentPosition: position })
  };

  changeStartingPosition = position => {
    this.setState({ startingPosition: position })
  };

  changeLocation = location => {
    this.setState({ location: location })
  };

  changeStartDate = date => {
    this.setState({ startDate: date })
  };

  changeGraduationDate = date => {
    this.setState({ graduationDate: date })
  };

  onSubmit = e => {
    e.preventDefault();
    new HttpClient().post('http://localhost:3000/update', {
      user_id: this.state.userId,
      location: this.state.location,
      start_date: this.state.startDate,
      graduation_date: this.state.graduationDate,
      current_position: this.state.currentPosition,
      starting_position: this.state.startingPosition
    })
    // .then( (data) => {
    //   this.props.onChange(data)
    // }) 
    // .catch( (data) => {
    //   debugger
    // })
  }

  render () {
    return (
      <form className="">
        <h6>{this.props.message}</h6>
        <Row>
          <Col m={4} s={12}>
            <InputSelect
              label={"Location"}
              options={this.state.locationOptions}
              value={this.state.location}
              onChange={location => this.changeLocation(location)}
            />
          </Col>
          <Col m={4} s={12}>
            <InputSelect
              label={"Current Position"}
              options={this.state.positionOptions}
              value={this.state.currentPosition}
              onChange={position => this.changeCurrentPosition(position)}
            />
          </Col>
          <Col m={4} s={12}>
            <InputDate 
              startDate={this.state.startDate}
              label={"Start Date"}
            //   value={this.state.startDate}
              onChange={date => this.changeStartDate(date)}
            />
          </Col>
          <Col m={4} s={12}>
            <InputSelect
              label={"Starting Position"}
              options={this.state.positionOptions}
              value={this.state.startingPosition}
              onChange={position => this.changeStartingPosition(position)}
            />
          </Col>
          <Col m={4} s={12}>
            <InputDate 
              startDate={this.state.graduationDate}
              label={"Graduation Date"}
            //   value={this.state.startDate}
              onChange={date => this.changeGraduationDate(date)}
            />
          </Col>
        </Row>
        <div className="row center-align">
        <Button waves="light" large onClick={e => this.onSubmit(e)}>Save</Button></div>
      </form>
    )
  }
}

export default ProfileForm;
