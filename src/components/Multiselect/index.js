import React, { Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import companyName from "../../constants/companyName";
import "./index.scss";

export default class Multiselect extends Component {
  render() {
    return (
      <Multiselect
        options={companyName}
        selectedValues={companyName} // Preselected value to persist in dropdown
        onSelect={this.onSelect} // Function will trigger on select event
        onRemove={this.onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
      />
    );
  }
}
