import style from "../css/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={style.home}>
      <div className={style.banner}>
        <h2 className={style.bannerText}> Välkommen till Nordic Radio! </h2>
      </div>
    </div>
  );
};

export default HomePage;
