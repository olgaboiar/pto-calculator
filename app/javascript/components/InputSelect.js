import React from 'react';
import Select from 'react-select';

class InputSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options,
      label: this.props.label,
      value: this.props.value
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = value => {
    this.setState({
        value: value.value
      });
    this.props.onChange(value.value);
  }
  
  render() {
    return (
      <div className='form-group row center-align' data-testid='position'>
        <div className=''>
          <Select
            options={this.state.options}
            onChange={this.handleChange}
            value={this.state.options.filter(({value}) => value === this.state.value)}
          />
        </div>
      </div>
    );
  }
}

export default InputSelect;
