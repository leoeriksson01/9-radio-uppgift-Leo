import style from "../css/RadioCard.module.css";
import { ChannelContext } from "../contexts/ChannelContext";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Card } from "react-bootstrap";

const RadioCard = () => {
  const history = useHistory();
  const { channels, getChannelById } = useContext(ChannelContext);

  const handleClick = (channelId) => {
    getChannelById(channelId);
    history.push(`/channels/${channelId}`);
  };

  console.log(channels);
  return (
    <div className={style.container}>
      {channels === null
        ? ""
        : channels.channels.map((channel) => {
            return (
              <div
                className={style.content}
                key={channel.id}
                onClick={() => handleClick(channel.id)}
              >
                <Card className={style.card1}>
                  <Card.Img variant="top" src={channel.image} />
                  <Card.Body>
                    <Card.Title>
                      {channel.name} {channel.channeltype}
                    </Card.Title>
                    <Card.Text>{channel.tagline}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
    </div>
  );
};

export default RadioCard;
