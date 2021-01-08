import React from "react";

class Square extends React.Component {
  render() {
    let a = ["white", "darksalmon"];
    return (
      <div
        className="cell"
        style={{ backgroundColor: a[this.props.value % a.length] }}
      >
        <div className="player">{this.props.player}</div>
        <div className="value">{this.props.value}</div>
      </div>
    );
  }
}

export default Square;
