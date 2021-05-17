import style from "../css/RadioCard.module.css";
import { ChannelContext } from "../contexts/ChannelContext";
import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";

const ProgramItem = ({ channel }) => {
  const history = useHistory();
  const { getProgramById } = useContext(ChannelContext);
  const { addToFav, favorite, user } = useContext(UserContext);
  const handleClick = (channelId) => {
    getProgramById(channelId);
    history.push(`/programs/${channelId}`);
  };

  return (
    <Card className={style.card1}>
      <Card.Img variant="top" src={channel.image} />
      <Card.Body>
        <Card.Title
          className={style.decorated}
          onClick={() => handleClick(channel.id)}
        >
          {channel.name} {channel.channeltype}
        </Card.Title>
        <Card.Text>{channel.tagline}</Card.Text>
        {user === null ? (
          ""
        ) : (
          <div
            onClick={() =>
              addToFav({
                userId: user.id,
                id: channel.id,
                name: channel.name,
                tagline: channel.tagline,
                channeltype: channel.channeltype,
              })
            }
            className={`${
              favorite.some((f) => f.id === channel.id)
                ? style.favorite
                : style.star
            }`}
          ></div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProgramItem;
