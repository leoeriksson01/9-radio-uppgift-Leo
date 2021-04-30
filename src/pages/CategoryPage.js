import { useEffect, useContext, useState } from "react";
import { ChannelContext } from "../contexts/ChannelContext";
import style from "../css/CategoryPage.module.css";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";

const CategoryPage = (props) => {
  const { category, getChannelById } = useContext(ChannelContext);
  console.log(category);
  const { channelId } = props.match.params;
  const history = useHistory();
  const [descriptionShow, setDescriptionShow] = useState(false);

  useEffect(() => {
    // console.log(singleChannel);
    // eslint-disable-next-line
  }, []);

  const toggleDescription = () => {
    setDescriptionShow((descriptionShow) => !descriptionShow);
  };

  const handleClick = (channelId) => {
    getChannelById(channelId);
    history.push(`/channels/${channelId}`);
  };

  return (
    <div className={style.container}>
      {category === null
        ? ""
        : category.programs.map((program, i) => {
            return (
              <div className={style.content} key={i}>
                <Card className={style.card1}>
                  <Card.Img variant="top" src={program.programimage} />
                  <Card.Body>
                    <Card.Title
                      className={style.decorated}
                      onClick={toggleDescription}
                    >
                      {program.name}
                    </Card.Title>
                    <Card.Text>{program.tagline}</Card.Text>
                  </Card.Body>
                  <div
                    className={`${
                      descriptionShow ? style.showing : style.hidden
                    }`}
                  >
                    Beskrivning: {program.description}
                  </div>
                </Card>
              </div>
            );
          })}
    </div>
  );
};

export default CategoryPage;
