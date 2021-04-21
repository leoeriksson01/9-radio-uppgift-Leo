import { useEffect, useContext } from "react";
import { ChannelContext } from "../contexts/ChannelContext";
import styles from "../css/HomePage.module.css";

const ChannelPage = (props) => {
  const { getChannelById, singleChannel } = useContext(ChannelContext);
  const { channelId } = props.match.params;

  useEffect(() => {
    getChannelById(channelId);
    // console.log(singleChannel);
    // eslint-disable-next-line
  }, []);

  let content = <h2>Loading...</h2>;
  if (singleChannel) {
    content = (
      <div className={styles.card2} key={singleChannel.channelId}>
        <div className={styles.title}>
          <span className={styles.header}>{singleChannel.name}</span>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default ChannelPage;
