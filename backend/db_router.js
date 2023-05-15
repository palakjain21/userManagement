const express = require("express");
const {
  addUser,
  getUsers,
  getUser,
  updateUser,
} = require("./db_controller");

const router = express.Router();

router.post("/addUser", addUser);
router.get("/getUsers", getUsers);
router.get("/getUser/:id", getUser);
router.put("/updateUser/:id", updateUser);

module.exports = router;
