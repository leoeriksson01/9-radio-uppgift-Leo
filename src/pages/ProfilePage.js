import style from "../css/ProfilePage.module.css";
import React, { useState, useContext, useEffect } from "react";
import { ChannelContext } from "../contexts/ChannelContext";
import { UserContext } from "../contexts/UserContext";

const ProfilePage = () => {
  const { favoriteChannels, getAllFavoriteChannels } = useContext(
    ChannelContext
  );
  const { user } = useContext(UserContext);
  console.log(favoriteChannels);

  useEffect(() => {
    getAllFavoriteChannels();
  }, []);

  const loggedOutProfile = (
    <div className={style.error}>
      Du måste vara inloggad för att se denna sidan
    </div>
  );

  const loggedInProfile = (
    <div className={style.box}>
      <div className={style.greeting}>Välkommen till din profilsida </div>
      <div className={style.info}>
        Här kan du se dina favoritkanaler och program{" "}
      </div>
      <div className={style.container}>
        {favoriteChannels === null
          ? ""
          : favoriteChannels.map((channel) => {
              return (
                <div className={style.content} key={channel.id}>
                  {/* <FavoritedChannelItem channel={channel} /> */}
                  <div className={style.name}>
                    {channel.channelName} {channel.channelType}{" "}
                  </div>
                  <div className={style.description}>
                    {channel.channelTagline}
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );

  return (
    <div className={style.profile_menu_content}>
      {user ? (
        <div className={style.profile_menu_content}>{loggedInProfile}</div>
      ) : (
        <div className={style.profile_menu_content}>{loggedOutProfile}</div>
      )}
    </div>
  );
};

export default ProfilePage;
