import { createContext, useState, useEffect } from "react";
export const ChannelContext = createContext();
const fetch = require("node-fetch");

const ChannelProvider = (props) => {
  const [channels, setChannels] = useState(null);
  const [singleChannel, setSingleChannel] = useState(null);
  const [program, setProgram] = useState(null);
  const [schedule, setSchedule] = useState(null);
  const [category, setCategory] = useState(null);
  const [favoriteChannels, setFavoriteChannels] = useState(null);
  const [favoritePrograms, setFavoritePrograms] = useState(null);

  useEffect(() => {
    getAllChannels();
  }, []);

  useEffect(() => {
    getAllFavoriteChannels();
  }, []);

  useEffect(() => {
    getAllFavoritePrograms();
  }, []);

  const getAllFavoriteChannels = async () => {
    let favoriteChannels = await fetch("/api/v1/user/getAllFavoriteChannels");
    let data = await favoriteChannels.json();
    setFavoriteChannels(data);
  };

  const getAllFavoritePrograms = async () => {
    let favoritePrograms = await fetch("/api/v1/user/getAllFavoritePrograms");
    let data = await favoritePrograms.json();
    setFavoritePrograms(data);
  };

  const getAllChannels = async () => {
    let channels = await fetch("/api/v1/channels");
    let data = await channels.json();
    // console.log(data);
    setChannels(data);
  };

  const getChannelById = async (channelId) => {
    console.log(channelId);
    let channel = await fetch(`/api/v1/channels/${channelId}`);
    channel = await channel.json();
    console.log(channel);
    setSingleChannel(channel);
  };

  const getProgramById = async (channelId) => {
    let program = await fetch(`/api/v1/programs/${channelId}`);
    program = await program.json();
    console.log(program);
    setProgram(program);
  };

  const getChannelSchedule = async (channelId) => {
    let schedule = await fetch(`/api/v1/schedule/${channelId}`);
    schedule = await schedule.json();
    setSchedule(schedule);
  };

  const getCategoryById = async (channelId) => {
    console.log("context");
    let category = await fetch(`/api/v1/category/${channelId}`);
    category = await category.json();
    setCategory(category);
  };

  const values = {
    channels,
    getAllChannels,
    singleChannel,
    getChannelById,
    getChannelSchedule,
    schedule,
    category,
    getCategoryById,
    favoriteChannels,
    getAllFavoriteChannels,
    getProgramById,
    program,
    getAllFavoritePrograms,
    favoritePrograms,
  };

  return (
    <ChannelContext.Provider value={values}>
      {props.children}
    </ChannelContext.Provider>
  );
};

export default ChannelProvider;
