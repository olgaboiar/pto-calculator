import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class InputDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.startDate,
    },
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(date) {
    this.setState({
      startDate: date
    });
    this.props.onChange(date);
  }
  
  render() {
    return (
      <div className="form-group row center-align" data-testid="startDate">
        <label>Select Your Start Date: </label>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          name="startDate"
          value={this.state.startDate}
        />
      </div>
    );
  }
}

export default InputDate;
