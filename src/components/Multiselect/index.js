import React, { Component } from "react";
import { Multiselect as MultiselectElement } from "multiselect-react-dropdown";
import companyData from "../../data/companyData";
import "./index.scss";

export default class Multiselect extends Component {
  render() {
    return (
      <MultiselectElement
        options={companyData}
        selectedValues={companyData}
        // onSelect={this.onSelect} // Function will trigger on select event
        // onRemove={this.onRemove} // Function will trigger on remove event
        displayValue="name"
        placeholder="Select company"
        closeIcon="cancel"
      />
    );
  }
}
