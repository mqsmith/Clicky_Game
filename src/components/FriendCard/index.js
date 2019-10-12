import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.name}
          src={props.image}
          id={props.id}
          onClick={() => props.shuffleScoreCard(props.id)}
          className="shuffleScore"
        />
      </div>
    </div>
  );
}

export default FriendCard;
