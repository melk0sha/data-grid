import React, { Component } from "react";
import toggleName from "../../constants/toggleName";
import "./index.scss";

export default class ToggleFilter extends Component {
  render() {
    const { onToggleFilter } = this.props;

    return (
      <div className="toggle-wrapper">
        <div className="toggle-radio">
          <input
            id={toggleName.ALL}
            type="radio"
            name="radio"
            defaultChecked
            onChange={onToggleFilter}
          />
          <label className="radio-label" htmlFor={toggleName.ALL}>
            {toggleName.ALL}
          </label>
        </div>

        <div className="toggle-radio">
          <input
            id={toggleName.STUDENT}
            type="radio"
            name="radio"
            onChange={onToggleFilter}
          />
          <label className="radio-label" htmlFor={toggleName.STUDENT}>
            {toggleName.STUDENT}
          </label>
        </div>

        <div className="toggle-radio">
          <input
            id={toggleName.EMPLOYEE}
            type="radio"
            name="radio"
            onChange={onToggleFilter}
          />
          <label className="radio-label" htmlFor={toggleName.EMPLOYEE}>
            {toggleName.EMPLOYEE}
          </label>
        </div>
      </div>
    );
  }
}
