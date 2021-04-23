import style from "../css/RadioCard.module.css";
import { ChannelContext } from "../contexts/ChannelContext";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Card } from "react-bootstrap";

const RadioCard = () => {
  const history = useHistory();
  const { channels, schedule, getChannelSchedule } = useContext(ChannelContext);

  const handleClick = (channelId) => {
    getChannelSchedule(channelId);
    history.push(`/schedule/${channelId}`);
  };

  console.log(schedule);
  console.log(channels);
  return (
    <div className={style.container}>
      {channels === null
        ? ""
        : channels.channels.map((channel) => {
            return (
              <div className={style.content} key={channel.id}>
                <Card
                  className={style.card1}
                  onClick={() => handleClick(channel.id)}
                >
                  <Card.Img variant="top" src={channel.image} />
                  <Card.Body>
                    <Card.Title className={style.decorated}>
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
