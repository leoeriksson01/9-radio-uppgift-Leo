import { createContext, useState, useEffect } from "react";
export const ChannelContext = createContext();
const fetch = require("node-fetch");

const ChannelProvider = (props) => {
  const [channels, setChannels] = useState(null);
  const [singleChannel, setSingleChannel] = useState(null);

  useEffect(() => {
    getAllChannels();
  }, []);

  const getAllChannels = async () => {
    console.log("hej");
    let channels = await fetch("/api/v1/channels");
    let data = await channels.json();
    // console.log(data);
    setChannels(data);
  };

  const getChannelById = async (channelId) => {
    console.log(channelId);
    channelId = parseInt(channelId);
    let channel = await fetch(`/api/v1/channels/${channelId}`);
    channel = await channel.json();
    console.log(channel);
    setSingleChannel(channel);
  };

  const values = {
    channels,
    getAllChannels,
    singleChannel,
    getChannelById,
  };
  return (
    <ChannelContext.Provider value={values}>
      {props.children}
    </ChannelContext.Provider>
  );
};

export default ChannelProvider;
