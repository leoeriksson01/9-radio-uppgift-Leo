import style from "../css/CategoriesPage.module.css";
import { ChannelContext } from "../contexts/ChannelContext";
import { useHistory } from "react-router-dom";
import { useContext } from "react";

const CategoriesPage = () => {
  const history = useHistory();
  const { getCategoryById } = useContext(ChannelContext);

  const handleClick = (channelId) => {
    getCategoryById(channelId);
    history.push(`/category/${channelId}`);
  };

  return (
    <div className={style.grid_container}>
      <div className={style.Barn38} onClick={() => handleClick(2)}>
        <p className={style.bannerText}> Barn 3-8 år </p>
      </div>
      <div className={style.Barn913} onClick={() => handleClick(132)}>
        {" "}
        <p className={style.bannerText}> Barn 9-13 år </p>
      </div>
      <div className={style.Kultur_Nöje} onClick={() => handleClick(3)}>
        <p className={style.bannerText}> Kultur/Nöje </p>
      </div>
      <div className={style.Drama}>
        <p className={style.bannerText} onClick={() => handleClick(134)}>
          {" "}
          Drama{" "}
        </p>
      </div>
      <div className={style.Ekonomi} onClick={() => handleClick(135)}>
        <p className={style.bannerText}> Ekonomi </p>
      </div>
      <div className={style.Humor} onClick={() => handleClick(133)}>
        <p className={style.bannerText}> Humor </p>
      </div>

      <div className={style.Dokumentär} onClick={() => handleClick(82)}>
        {" "}
        <p className={style.bannerText}> Dokumentär </p>
      </div>
      <div className={style.Livsstil} onClick={() => handleClick(14)}>
        <p className={style.bannerText}> Livsstil </p>
      </div>
      <div className={style.Livsåskådning} onClick={() => handleClick(4)}>
        <p className={style.bannerText}> Livsåskådning </p>
      </div>
      <div className={style.Musik} onClick={() => handleClick(5)}>
        <p className={style.bannerText}> Musik </p>
      </div>
    </div>
  );
};

export default CategoriesPage;
