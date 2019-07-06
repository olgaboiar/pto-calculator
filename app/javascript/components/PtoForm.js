import React from 'react';
import moment from "moment";
import InputDate from './InputDate';
import InputSelect from './InputSelect';
import HttpClient from './HttpClient';
import { Button } from 'react-materialize';

const options = [
  { value: 'crafter', label: 'Crafter' },
  { value: 'apprentice', label: 'Apprentice' },
]

class PtoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment("2019-01-01").toDate(),
      positionOptions: options,
      position: options[0],
    },

    this.changePosition = this.changePosition.bind(this); 
    this.changeDate = this.changeDate.bind(this); 
    this.onSubmit = this.onSubmit.bind(this);             
  }

  changePosition = position => {
    this.setState({ position: position })
  };

  changeDate = date => {
    this.setState({ startDate: date })
  };

  onSubmit = e => {
    e.preventDefault();
    new HttpClient().post('http://localhost:3000/calculate', {
      start_date: this.state.startDate,
      position: this.state.position
    })
    .then( (data) => {
      this.props.onChange(data)
    }) 
    .catch( (data) => {
      debugger
    })
  }

  render () {
    return (
      <form className="container">
        <InputSelect 
          options={this.state.positionOptions}
          onChange={position => this.changePosition(position)}
        />
        <InputDate 
          startDate={this.state.startDate}
          onChange={date => this.changeDate(date)}
        />
        <div className="row center-align">
        <Button waves="light" large onClick={e => this.onSubmit(e)}>Calculate PTO</Button></div>
      </form>
    )
  }
}

export default PtoForm;
