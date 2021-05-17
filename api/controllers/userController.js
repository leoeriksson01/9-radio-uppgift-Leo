const sqlite3 = require("sqlite3");
const Encrypt = require("../Encrypt");
const path = require("path");

const db = new sqlite3.Database(path.join(__dirname, "../../src/userDB.db"));
// db.get(sql, [params], [callback(err, row){}])
// db.all(sql, [params], [callback(err, rows){}])
// db.run(sql, [params], [function callback(err){context - this}])

const getAllFavoriteChannels = (req, res) => {
  query = /*sql*/ `SELECT * FROM favoriteChannels`;
  let favoriteChannels = db.all(query, {}, function (err, data) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(data);
    res.json(data);
  });
  console.log(favoriteChannels);
};

const getAllFavoritePrograms = (req, res) => {
  query = /*sql*/ `SELECT * FROM favoritePrograms`;
  let favoritePrograms = db.all(query, {}, function (err, data) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(data);
    res.json(data);
  });
  console.log(favoritePrograms);
};

const deleteFav = (req, res) => {
  let query = /*sql*/ `DELETE FROM favoriteChannels WHERE channelId = $channelId`;
  let id = req.params.id;
  console.log(id);
  db.get(query, id, function (err, data) {
    if (err) {
      console.log(err);
      throw err;
    }
  });
};

const deleteFavProgram = (req, res) => {
  let query = /*sql*/ `DELETE FROM favoritePrograms WHERE programId = $programId`;
  let id = req.params.id;
  console.log(id);
  db.get(query, id, function (err, data) {
    if (err) {
      console.log(err);
      throw err;
    }
  });
};

const addToFav = (req, res) => {
  let favoriteToRegister = req.body;

  // Before trying to register the user, lets find out if the channel already exists
  let query = /*sql*/ `SELECT * FROM favoriteChannels WHERE channelId = $channelId`;
  let params = { $channelId: favoriteToRegister.channelId };
  db.get(query, params, (err, channelExist) => {
    if (channelExist) {
      res.status(400).json({ error: "This channel is already favorited" });
      return;
    }
  });

  query = /*sql*/ `INSERT INTO favoriteChannels (userId, channelId, channelName, channelTagline, channelType) VALUES ($userId,$id, $name, $tagline, $channeltype)`;
  params = {
    $userId: favoriteToRegister.userId,
    $id: favoriteToRegister.id,
    $name: favoriteToRegister.name,
    $tagline: favoriteToRegister.tagline,
    $channeltype: favoriteToRegister.channeltype,
  };

  db.run(query, params, function (err) {
    if (err) {
      res.status(400).json({ error: err });
      return;
    }

    res.json({
      success: "Channel registered successfully",
      lastID: this.lastID,
    });
  });
};

const addProgramToFav = (req, res) => {
  let favoriteProgramToRegister = req.body;

  // Before trying to register the user, lets find out if the program already exists
  let query = /*sql*/ `SELECT * FROM favoritePrograms WHERE programId = $programId`;
  let params = { $programId: favoriteProgramToRegister.programId };
  db.get(query, params, (err, programExist) => {
    if (programExist) {
      res.status(400).json({ error: "This program is already favorited" });
      return;
    }
  });

  query = /*sql*/ `INSERT INTO favoritePrograms (userId, programId, programName, programDescription) VALUES ($userId, $id, $name, $description)`;
  params = {
    $userId: favoriteProgramToRegister.userId,
    $id: favoriteProgramToRegister.id,
    $name: favoriteProgramToRegister.name,
    $description: favoriteProgramToRegister.description,
  };

  db.run(query, params, function (err) {
    if (err) {
      res.status(400).json({ error: err });
      return;
    }

    res.json({
      success: "Program registered successfully",
      lastID: this.lastID,
    });
  });
};

// Here we check which session is active or not and returns this to the client/frontend.
const whoami = (req, res) => {
  res.json(req.session.user || null);
};

const login = (req, res) => {
  let query = /*sql*/ `SELECT * FROM users WHERE email = $email`;
  let params = { $email: req.body.email };
  console.log(params);
  // let user = null;
  db.get(query, params, function (err, userInDB) {
    if (!userInDB) {
      res.status(401).json({ error: "Bad credentials" });
      return;
    }

    req.body.password = Encrypt.encrypt(req.body.password);
    if (userInDB.password === req.body.password) {
      delete userInDB.password;
      req.session.user = userInDB;
      res.json({ success: "Login successfull", loggedInUser: userInDB });
      return;
    } else {
      res.status(401).json({ error: "Bad credentials" });
      return;
    }
  });
};

const logout = (req, res) => {
  delete req.session.user;
  res.json({ success: "Logout Successfully" });
};

const register = (req, res) => {
  let userToRegister = req.body;

  // Before trying to register the user, lets find out if the user already exists
  let query = /*sql*/ `SELECT * FROM users WHERE email = $email`;
  let params = { $email: userToRegister.email };
  db.get(query, params, (err, userExist) => {
    if (userExist) {
      res.status(400).json({ error: "User with that email already exists" });
      return;
    }
  });

  userToRegister.password = Encrypt.encrypt(userToRegister.password);
  query = /*sql*/ `INSERT INTO users (email, password) VALUES ($email, $password)`;
  params = {
    $email: userToRegister.email,
    $password: userToRegister.password,
  };

  db.run(query, params, function (err) {
    if (err) {
      res.status(400).json({ error: err });
      return;
    }

    res.json({ success: "User register successful", lastID: this.lastID });
  });
};

// Export the differents route handlers
module.exports = {
  whoami,
  login,
  logout,
  register,
  addToFav,
  deleteFav,
  getAllFavoriteChannels,
  addProgramToFav,
  deleteFavProgram,
  getAllFavoritePrograms,
};
