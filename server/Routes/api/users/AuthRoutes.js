import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
} from "../../../Controllers/AuthController.js";
import auth from "../../../middleware/auth.js";
import validateUser from "../../../Utils/userValidator.js";
const router = express.Router();
// @route Post api/users
const validate = (schema) => async (req, res, next) => {
  const user = req.body;
  console.log(user)
  try {
    await schema.validate(user);
    return next();
  } catch (err) {
    return res.status(500).json({ type: err.name, message: err.message});
  }
};
router.post("/register", validate(validateUser.register), registerUser);
router.post("/login", validate(validateUser.login), loginUser);
router.get("/me", auth, getMe);
export default router;
