import style from "../css/RadioCard.module.css";
import { ChannelContext } from "../contexts/ChannelContext";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import RadioItem from "./RadioItem";

const RadioCard = () => {
  const history = useHistory();
  const { channels, schedule, getChannelSchedule } = useContext(ChannelContext);
  const [favorite, setFavorite] = useState(null);

  const handleClick = (channelId) => {
    getChannelSchedule(channelId);
    history.push(`/schedule/${channelId}`);
  };

  const toggleFavorite = () => {
    setFavorite((favorite) => !favorite);
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
                <RadioItem channel={channel} />
              </div>
            );
          })}
    </div>
  );
};

export default RadioCard;
