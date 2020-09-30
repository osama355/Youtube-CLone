import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Card.css";

function Card({ image, title, channel, views, time, channelImage }) {
  return (
    <div className="videoCard">
      <img className="cardImage" src={image} alt="" />
      <div className="vidInfo">
        <AccountCircleIcon
          className="avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoText">
          <h5 className="vidHeading">{title}</h5>
          <p className="paraChannel"> {channel} </p>
          <p className="viewsTime">
            {views} . {time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
