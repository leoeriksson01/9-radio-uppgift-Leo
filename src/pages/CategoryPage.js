import { useEffect, useContext, useState } from "react";
import { ChannelContext } from "../contexts/ChannelContext";
import style from "../css/CategoryPage.module.css";
import { Card } from "react-bootstrap";

const CategoryPage = (props) => {
  const { category } = useContext(ChannelContext);
  console.log(category);
  const { channelId } = props.match.params;

  useEffect(() => {
    // console.log(singleChannel);
    // eslint-disable-next-line
  }, []);

  return (
    <ul className={style.container}>
      {category === null
        ? ""
        : category.map((program, i) => {
            return (
              <li className={style.content} key={i}>
                {i} {program.title} {program.starttimeutc} -{" "}
                {program.endtimeutc}
              </li>
            );
          })}
    </ul>
  );
};

export default CategoryPage;
