import style from "../css/RadioCard.module.css";
import { ChannelContext } from "../contexts/ChannelContext";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import ProgramItem from "./ProgramItem";

const ProgramCard = () => {
  const history = useHistory();
  const { channels, schedule, getProgramById } = useContext(ChannelContext);
  const [favorite, setFavorite] = useState(null);

  const handleClick = (channelId) => {
    getProgramById(channelId);
    history.push(`/programs/${channelId}`);
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
                <ProgramItem channel={channel} />
              </div>
            );
          })}
    </div>
  );
};

export default ProgramCard;
