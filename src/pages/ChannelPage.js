import { useEffect, useContext } from "react";
import { ChannelContext } from "../contexts/ChannelContext";
import style from "../css/ChannelPage.module.css";
import { Card } from "react-bootstrap";

const ChannelPage = (props) => {
  const { getChannelById, singleChannel } = useContext(ChannelContext);
  const { channelId } = props.match.params;
  console.log(singleChannel);

  useEffect(() => {
    getChannelById(channelId);
    // console.log(singleChannel);
    // eslint-disable-next-line
  }, []);

  let content = <h2>Loading...</h2>;
  if (singleChannel) {
    content = (
      <div className={style.banner} key={singleChannel.channelId}>
        <Card className={style.card1}>
          <Card.Img variant="top" src={singleChannel.channel.image} />
          <Card.Body>
            <Card.Title>
              {singleChannel.channel.name} {singleChannel.channel.channeltype}
            </Card.Title>
            <Card.Text>{singleChannel.channel.tagline}</Card.Text>
          </Card.Body>
        </Card>

        {/* <div className={style.title}>
          <span className={style.header}>{singleChannel.channel.name}</span>
        </div> */}
      </div>
    );
  }

  return <div>{content}</div>;
};

export default ChannelPage;
