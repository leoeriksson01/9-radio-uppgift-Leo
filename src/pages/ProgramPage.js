import { useEffect, useContext, useState } from "react";
import { ChannelContext } from "../contexts/ChannelContext";
import style from "../css/ProgramPage.module.css";
import Program from "../components/Program";

const ProgramPage = (props) => {
  const { program } = useContext(ChannelContext);
  console.log(program);

  useEffect(() => {
    // console.log(singleChannel);
    // eslint-disable-next-line
  }, []);

  return (
    <ul className={style.container}>
      {program === null
        ? ""
        : program.programs.map((program) => {
            return (
              <div className={style.content} key={program.id}>
                <Program program={program} />
              </div>
            );
          })}
    </ul>
  );
};

export default ProgramPage;
