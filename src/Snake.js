import React from "react";
//import snakeimg from "./snake2.png";
import "./App.css";
class Snake extends React.Component {
  render() {
    return (
      <>
      <div className="snakes">
        <div className="snake-1 snake"></div>
        <div className="snake-2 snake"></div>
        <div className="snake-3 snake"></div>
        <div className="snake-4 snake"></div>
        <div className="snake-5 snake"></div>
      </div>
      <div className="ladders">
      <div className="ladder-1 ladder"></div>
      <div className="ladder-2 ladder"></div>
      <div className="ladder-3 ladder"></div>
      <div className="ladder-4 ladder"></div>
      <div className="ladder-5 ladder"></div>
    </div>
    </>
    );
  }
}

export default Snake;
