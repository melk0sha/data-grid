import React, { Component } from "react";
import { Multiselect as MultiselectElement } from "multiselect-react-dropdown";
import companyData from "../../data/companyData";
import "./index.scss";

export default class Multiselect extends Component {
  render() {
    const { onSelect } = this.props;

    return (
      <MultiselectElement
        options={companyData}
        selectedValues={companyData}
        onSelect={onSelect}
        onRemove={onSelect}
        displayValue="name"
        placeholder="Select company"
        closeIcon="cancel"
        style={{
          searchBox: {
            border: "1px solid #a1b2ff",
            borderRadius: "3px",
            fontSize: "1rem",
            minHeight: "40px"
          },
          inputField: {
            fontSize: "1rem",
            width: "130px",
            fontFamily: `"Lato", sans-serif`
          },
          chips: {
            backgroundColor: "#3197ee",
            margin: "0 7px 0 0",
            height: "27px"
          },
          optionContainer: {
            border: "1px solid #a1b2ff"
          },
          option: {
            fontFamily: `"Lato", sans-serif`
          }
        }}
      />
    );
  }
}
