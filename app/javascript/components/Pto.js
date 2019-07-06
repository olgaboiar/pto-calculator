import React from 'react';

class Pto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ptoHours: this.props.ptoHours
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
        <div className="row">
          <div className="col s12 m6 l4 offset-l4">
            <p>You have {this.state.ptoHours} PTO hours, which is equal to {this.state.ptoHours / 8} vacation days.</p>
          </div>
        </div>
      )}
    return null;
  }
}

export default Pto;
