import React, { Component } from "react";
import "./index.scss";

export default class SwitchVirtualization extends Component {
  render() {
    const { onSwitchVirt } = this.props;

    return (
      <div className="switch-virt-wrapper">
        <input
          id="s2"
          type="checkbox"
          className="switch"
          defaultChecked
          onClick={onSwitchVirt}
        />
        <label htmlFor="s2">Switch Virtualization</label>
      </div>
    );
  }
}
