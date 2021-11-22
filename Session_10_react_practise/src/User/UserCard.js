import React from "react";
import Card from "../UI/Card";
import "./UserCard.css";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
export default function UserCard(props) {
  return (
    <Card className="user-card">
      <img className="user-card_avatar" src={props.user.avatar} />
      <div className="user-card__info">
        <div className="user-card_name">{props.user.name}</div>
        <div className="user-card__phone">{props.user.phone}</div>
      </div>
    </Card>
  );
}
