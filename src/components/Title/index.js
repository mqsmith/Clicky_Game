import React from "react";
import "./style.css";

const Title = props => (
  <div className="title">
    {props.children}
    <div className="scores">
      <h3>
        Score: {props.score} HighScore: {props.highScore}
      </h3>
    </div>
  </div>
);

export default Title;
