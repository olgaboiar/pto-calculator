import React from 'react';
import InputDate from './InputDate';
import InputSelect from './InputSelect';
import HttpClient from './HttpClient';
import { Button, Row, Col } from 'react-materialize';

const positionOptions = [
  { value: 'crafter', label: 'Crafter' },
  { value: 'apprentice', label: 'Apprentice' }
]

class EmploymentHistoryForm extends React.Component {
  constructor(props) {
    super(props);
    let initialIds = [];
    this.props.user.employment.forEach(item => initialIds.push(item.id));
    this.state = {
      employeeId: this.props.user.profile.id,
      entries: this.props.user.employment,
      initialIds: initialIds,
      positionOptions: positionOptions,
      error: ''
    }
    this.handleEntryPositionChange = this.handleEntryPositionChange.bind(this); 
    this.handleEntryStartDateChange = this.handleEntryStartDateChange.bind(this); 
    this.handleEntryEndDateChange = this.handleEntryEndDateChange.bind(this); 
    this.handleRemoveEntry = this.handleRemoveEntry.bind(this); 
    this.handleAddEntry = this.handleAddEntry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleEntryPositionChange = (idx, position) => {
    const newEntries = this.state.entries.map((entry, sidx) => {
      if (idx !== sidx) return entry;
      return { ...entry, position: position };
    });

    this.setState({ entries: newEntries });
  };

  handleEntryStartDateChange = (idx, date) => {
    const newEntries = this.state.entries.map((entry, sidx) => {
      if (idx !== sidx) return entry;
      return { ...entry, start_date: date };
    });

    this.setState({ entries: newEntries });
  };

  handleEntryEndDateChange = (idx, date) => {
    const newEntries = this.state.entries.map((entry, sidx) => {
      if (idx !== sidx) return entry;
      return { ...entry, end_date: date };
    });

    this.setState({ entries: newEntries });
  };

  handleRemoveEntry = idx => () => {
    this.setState({
      entries: this.state.entries.filter((s, sidx) => idx !== sidx)
    });
  };

  handleAddEntry = () => {
    this.setState({
      entries: this.state.entries.concat([{ position: '' }])
    });
  };

  checkDateValidation(entries) {
    let validDates = true;
    entries.map((entry) => {
      let startDate = entry.start_date
      let endDate = entry.end_date
      if ((new Date(startDate) > new Date(endDate)) || (new Date(endDate) < new Date(startDate))) {
        validDates = false
      }
    });
    return validDates;
  }

  handleSubmit = async(e) => {
    e.preventDefault()
    let validForm;
    validForm = await this.checkDateValidation(this.state.entries)
    if (validForm == true) {
      new HttpClient().post('http://localhost:3000/employee/history/update', {
        employee_id: this.state.employeeId,
        entries: this.state.entries,
        initial_ids: this.state.initialIds
      })
      window.location.reload()
    } else {
      this.setState({ error: 'ERROR! Make sure start date is earlier than end date' });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off" style={{margin: "3vh"}}>
        <input autoComplete="false" name="hidden" type="text" style={{display: "none"}}></input>
        <h6>Employment history</h6>
        <div className="red-text"><h6>{this.state.error}</h6></div>
        {this.state.entries.map((entry, idx) => (
          <Row key={entry.position + Date.now()+Math.random()}>
            <Col m={4} s={12}>
              <InputSelect
                options={this.state.positionOptions}
                value={entry.position}
                onChange={position => this.handleEntryPositionChange(idx, position)}
              />
            </Col>
            <Col m={3} s={5}>
              <InputDate 
                date={entry.start_date}
                onChange={date => this.handleEntryStartDateChange(idx, date)}
              />
            </Col>
            <Col m={3} s={5}>
              <InputDate 
                date={entry.end_date}
                onChange={date => this.handleEntryEndDateChange(idx, date)}
              />
            </Col>
            <Col m={2} s={2}>  
              <Button
                node="a"
                waves="light"
                icon="cancel"
                floating
                onClick={this.handleRemoveEntry(idx)}></Button>
            </Col>
          </Row>
        ))}
        <Row>
          <Col>
            <Button
              node="a"
              waves="light"
              onClick={this.handleAddEntry} >Add another entry</Button>
          </Col>
        </Row>
        <Row className="center-align">
          <Button waves="light" large type="submit" >Save</Button>
        </Row>
      </form>
    )
  }
}

export default EmploymentHistoryForm;
