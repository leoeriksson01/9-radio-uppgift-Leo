import style from "../css/BrowsePage.module.css";
import RadioCard from "../components/RadioCard";

const BrowsePage = () => {
  return (
    <div className={style.main}>
      <h3> Logga in för att lägga till en kanal som favorit</h3>
      <RadioCard />
    </div>
  );
};

export default BrowsePage;
