import React from 'react'
import Select from 'react-select'

class InputSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionOptions: this.props.options,
      label: this.props.label
    };
  
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = position => {
    this.props.onChange(position);
  }
  
  render() {
    const positionOptions = this.props.options;
    return (
      <div className="form-group row center-align" data-testid="position">
        <div className="col s12 m6 l4 offset-l4">
          <label>Select Your {this.state.label}: </label>
          <Select
            options={positionOptions}
            onChange={this.handleChange}
            defaultValue={positionOptions[0]}
          />
        </div>
      </div>
    );
  }
}

export default InputSelect;
