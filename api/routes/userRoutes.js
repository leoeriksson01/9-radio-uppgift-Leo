const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController");

// User routes setup goes underneath here...
router.get("/whoami", userController.whoami);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.post("/register", userController.register);
router.post("/addToFav", userController.addToFav);
router.post("/addProgramToFav", userController.addProgramToFav);
router.delete("/deleteFav/:id", userController.deleteFav);
router.delete("/deleteFavProgram/:id", userController.deleteFavProgram);
router.get("/getAllFavoriteChannels", userController.getAllFavoriteChannels);
router.get("/getAllFavoritePrograms", userController.getAllFavoritePrograms);

module.exports = router;
