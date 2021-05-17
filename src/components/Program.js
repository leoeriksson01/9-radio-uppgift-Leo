import style from "../css/Program.module.css";
import { ChannelContext } from "../contexts/ChannelContext";
import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";

const Program = ({ program }) => {
  const { addProgramToFav, favoriteProgram, user } = useContext(UserContext);

  return (
    <Card className={style.card1}>
      <Card.Img variant="top" src={program.programimage} />
      <Card.Body>
        <Card.Title className={style.decorated}>
          {program.name} {program.broadcastinfo}
        </Card.Title>
        <Card.Text>{program.tagline}</Card.Text>
        {user === null ? (
          ""
        ) : (
          <div
            className={style.favorite}
            onClick={() =>
              addProgramToFav({
                userId: user.id,
                id: program.id,
                name: program.name,
                description: program.description,
              })
            }
          >
            Add to favorite{" "}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default Program;
