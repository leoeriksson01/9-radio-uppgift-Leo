import { useEffect, useContext, useState } from "react";
import { ChannelContext } from "../contexts/ChannelContext";
import style from "../css/SchedulePage.module.css";

const SchedulePage = (props) => {
  const { schedule, channelId, getChannelById } = useContext(ChannelContext);
  const [descriptionShow, setDescriptionShow] = useState(false);
  console.log(schedule);

  useEffect(() => {
    // console.log(singleChannel);
    // eslint-disable-next-line
  }, []);

  const toggleDescription = () => {
    getChannelById(channelId);
    setDescriptionShow((descriptionShow) => !descriptionShow);
  };

  return (
    <ul className={style.container}>
      {schedule === null
        ? ""
        : schedule.map((scheduledepisode, i) => {
            return (
              <li className={style.content} key={i}>
                <div className={style.first}>
                  <div className={style.header} onClick={toggleDescription}>
                    {scheduledepisode.title} {scheduledepisode.starttimeutc} -{" "}
                    {scheduledepisode.endtimeutc}{" "}
                  </div>
                </div>

                <div
                  className={`${
                    descriptionShow ? style.showing : style.hidden
                  }`}
                >
                  Beskrivning: {scheduledepisode.description}
                </div>
              </li>
            );
          })}
    </ul>
  );
};

export default SchedulePage;
