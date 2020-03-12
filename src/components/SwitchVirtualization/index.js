import React, { Component } from "react";
import "./index.scss";

export default class SwitchVirtualization extends Component {
  render() {
    return (
      <div className="switch-virt-wrapper">
        <input id="s2" type="checkbox" className="switch" checked />
        <label for="s2">Switch</label>
      </div>
    );
  }
}
