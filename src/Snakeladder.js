import "./App.css";
import React, { useState } from "react";
import Square from "./Square.js";
import Snake from "./Snake";

function Snakeladder() {
  let start;
  const [player, setPlayer] = useState("X");
  const [xvalue, setValuex] = useState(0);
  const [yvalue, setValuey] = useState(0);
  const [scorex, setScorex] = useState(0);
  const [scorey, setScorey] = useState(0);
  const [result, setResult] = useState(null);
  const rollDice = () => {
    if (result) return;
    let dicevalue = Math.floor(Math.random() * 6) + 1;
    // if (scorex === 100 || scorey === 100) {
    //   scorex === 100 ? setResult("X") : setResult("Y");
    //   return;
    // }
    //  master
    if (player === "X") {
      if (100 - scorex > dicevalue) {
        setValuex(dicevalue);
        setValuey(0);
        let x = checkLadderSnake(scorex + dicevalue);
        // let value = x === 0 ? scorex + dicevalue : x;
        setScorex(x);
      } else if (scorex + dicevalue === 100) {
        setValuex(dicevalue);
        setValuey(0);
        setResult("X");
        setScorex(scorex + dicevalue);
      } else {
        setValuex(dicevalue);
        setValuey(0);
      }
    } else {
      if (100 - scorey > dicevalue) {
        setValuey(dicevalue);
        setValuex(0);
        let y = checkLadderSnake(scorey + dicevalue);
        // let value = y === 0 ? scorey + dicevalue : y;
        setScorey(y);
      } else if (scorey + dicevalue === 100) {
        setValuey(dicevalue);
        setValuex(0);
        setResult("Y");
        setScorey(scorey + dicevalue);
      } else {
        setValuex(0);
        setValuey(dicevalue);
      }
    }
    setPlayer((player) => {
      return player === "X" ? "Y" : "X";
    });
  };

  const checkLadderSnake = (cellno) => {
    switch (cellno) {
      case 3:
        return 24;
      case 7:
        return 77;
      case 12:
        return 28;
      case 59:
        return 78;
      case 47:
        return 89;
      case 44:
        return 20;
      case 46:
        return 36;
      case 87:
        return 29;
      case 85:
        return 57;
      case 99:
        return 17;
      default:
        return cellno;
    }
  };
  const cell = (row) => {
    let cellarr = [];
    if (row % 2 !== 0) {
      for (let col = start; col > start - 10; col--) {
        cellarr.push(
          <Square
            key={col}
            value={col}
            player={`${scorex === col ? "X" : ""}${scorey === col ? "Y" : ""}`}
          />
        );
      }
    } else {
      for (let col = start - 9; col <= start; col++) {
        cellarr.push(
          <Square
            key={col}
            value={col}
            player={`${scorex === col ? "X" : ""}${scorey === col ? "Y" : ""}`}
          />
        );
      }
    }
    start = start - 10;
    return cellarr;
  };
  const square = () => {
    let sqaurearr = [];
    start = 100;

    for (let row = 1; row <= 10; row++) {
      sqaurearr.push(
        <div key={row} className="row">
          {cell(row)}
        </div>
      );
    }
    return sqaurearr;
  };
  return (
    <>
      <div className="Header">
        <h2 className="title">SNAKE & LADDER</h2>
        <span className="Player">
          {result ? "Winner:" + result : "Player:" + player}
        </span>

        <br></br>
        <span className="X">X-Value:{xvalue}</span>
        <button className="button" onClick={rollDice}>
          Roll Dice
        </button>
        <span className="Y">Y-Value:{yvalue}</span>
      </div>
      <div className="container">
        <div className="Board">{square()}</div>
        <Snake />
      </div>
    </>
  );
}

export default Snakeladder;
