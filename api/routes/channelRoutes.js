const express = require("express");
const router = express.Router();

const channelController = require("../controllers/channelController");

router.get("", channelController.getAllChannels);
router.get("/:id", channelController.getChannelById);
router.get("/schedule/:channelId", channelController.getChannelSchedule);

module.exports = router;
