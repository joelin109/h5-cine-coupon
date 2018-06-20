import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class CRadioGroup extends React.Component {
  state = {
    value: this.props.value
  };

  radios = this.props.items.map(item => {
    return (
      <FormControlLabel
        value={item.value}
        control={<Radio color="primary" />}
        label={item.label}
      />
    );
  });

  handleChange = event => {
    let value = event.target.value;
    this.setState({ value: value });

    this.props.onChange(value);
  };

  render() {
    return (
      <RadioGroup
        aria-label="gender"
        value={this.state.value}
        onChange={this.handleChange}
      >
        {this.radios}
      </RadioGroup>
    );
  }
}

export default (CRadioGroup = CRadioGroup);
