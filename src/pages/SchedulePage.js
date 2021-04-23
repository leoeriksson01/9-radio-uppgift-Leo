import { useEffect, useContext, useState } from "react";
import { ChannelContext } from "../contexts/ChannelContext";
import style from "../css/SchedulePage.module.css";

const SchedulePage = (props) => {
  const { schedule } = useContext(ChannelContext);
  const [descriptionShow, setDescriptionShow] = useState(false);
  console.log(schedule);

  useEffect(() => {
    // console.log(singleChannel);
    // eslint-disable-next-line
  }, []);

  const toggleDescription = () => {
    setDescriptionShow((descriptionShow) => !descriptionShow);
  };

  return (
    <ul className={style.container}>
      {schedule === null
        ? ""
        : schedule.map((scheduledepisode, i) => {
            return (
              <li className={style.content} key={i} onClick={toggleDescription}>
                {i} {scheduledepisode.title} {scheduledepisode.starttimeutc} -{" "}
                {scheduledepisode.endtimeutc}
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
