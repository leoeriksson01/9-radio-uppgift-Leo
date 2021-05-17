const fetch = require("node-fetch");
const json = "format=json";
const paginationFalse = "pagination=false";

const utils = require("../core/utilities");

const getAllChannels = async (req, res) => {
  let channels = await fetch(
    `http://api.sr.se/api/v2/channels?${json}&${paginationFalse}`
  );
  channels = await channels.json();
  res.json(channels);
};

const getChannelById = async (req, res) => {
  let channel = await fetch(
    `http://api.sr.se/api/v2/channels/${req.params.channelId}?${json}`
  );
  channel = await channel.json();
  res.json(channel);
};

const getProgramById = async (req, res) => {
  let program = await fetch(
    `http://api.sr.se/api/v2/programs/index?channelId=${req.params.channelId}&${json}&${paginationFalse}`
  );
  program = await program.json();
  res.json(program);
};

const getChannelSchedule = async (req, res) => {
  let channelSchedule = await fetch(
    `http://api.sr.se/api/v2/scheduledepisodes?${json}&${paginationFalse}&channelId=${req.params.channelId}&date=${req.query.date}`
  );
  channelSchedule = await channelSchedule.json();

  channelSchedule.schedule = channelSchedule.schedule.map((p) => {
    console.log(new Date(p.starttimeutc));
    return {
      ...p,
      starttimeutc: utils.convertToDateObject(p.starttimeutc),
      endtimeutc: utils.convertToDateObject(p.endtimeutc),
    };
  });

  res.json(channelSchedule.schedule);
};

const getCategoryById = async (req, res) => {
  let category = await fetch(
    `http://api.sr.se/api/v2/programs/index?programcategoryid=${req.params.channelId}&${json}&${paginationFalse}`
  );
  category = await category.json();
  res.json(category);
  console.log(req.params);
};

module.exports = {
  getAllChannels,
  getChannelById,
  getChannelSchedule,
  getCategoryById,
  getProgramById,
};
