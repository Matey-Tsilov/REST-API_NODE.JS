const router = require("express").Router();
const userService = require("../services/userService");
const mongooseErrorMapper = require('../utils/mongooseErrorMapper')

router.post("/login", async (req, res) => {
  const {email, password} = req.body;
  
  try {
    const session = await userService.login(email, password)
    res.json(session);
  } catch (error) {
    const errorMsg = mongooseErrorMapper(error);
    res.status(404).json({ message: errorMsg });
  }
});
router.post("/register", async (req, res) => {
  const body = req.body;

  try {
    const newUser = await userService.register(body);
    res.json(newUser);
  } catch (error) {
    const errorMsg = mongooseErrorMapper(error);
    res.status(404).json({ message: errorMsg });
  }
});
router.get("/logout/:id", (req, res) => {
  //delete record from DB
  req.json({});
});

module.exports = router;
