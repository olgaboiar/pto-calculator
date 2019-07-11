import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class InputDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      date: date,
    });
    this.props.onChange(date);
  }

  render() {
    return (
      <div className='form-group row center-align' data-testid='startDate'>
        <label>Select date: </label>
        <DatePicker
          onChange={this.handleChange}
          selected={Date.parse(this.state.date)}
        />
      </div>
    );
  }
}

export default InputDate;
