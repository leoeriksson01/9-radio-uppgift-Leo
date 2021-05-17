import style from "../css/ProgramsPage.module.css";
import ProgramCard from "../components/ProgramCard";

const ProgramsPage = () => {
  return (
    <div className={style.main}>
      <h3> Logga in för att lägga till en kanal som favorit</h3>
      <ProgramCard />
    </div>
  );
};

export default ProgramsPage;
