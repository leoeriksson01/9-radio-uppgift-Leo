const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController");

// User routes setup goes underneath here...
router.get("/whoami", userController.whoami);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.post("/register", userController.register);
router.post("/addToFav", userController.addToFav);
router.delete("/deleteFav/:id", userController.deleteFav);
router.get("/getAllFavoriteChannels", userController.getAllFavoriteChannels);

module.exports = router;
