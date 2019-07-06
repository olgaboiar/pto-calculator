import React from 'react'
import PtoForm from './PtoForm';
import Pto from './Pto';

class PtoCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ptoHours: null,
    }
    this.changePtoHours = this.changePtoHours.bind(this); 
    this.ptoElement = React.createRef();
  }

  changePtoHours = data => {
    this.setState({ ptoHours: data.data.response })
    this.ptoElement.current.changePtoHoursValue(this.state.ptoHours);
  };

  render () {
    return (
      <div className="">
        <PtoForm 
          onChange={data => this.changePtoHours(data)}
        />
        <Pto
          ref={this.ptoElement}
        />
      </div>
    )
  }
}

export default PtoCalculator
