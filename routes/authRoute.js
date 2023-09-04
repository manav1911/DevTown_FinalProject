import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//Router Object
const router = express.Router();

//Routing
//Register
router.post("/register", registerController);

//Login
router.post("/login", loginController);

//Forgot Password
router.post("/forgot-password", forgotPasswordController);

//Test Routes
router.get("/test", requireSignIn, isAdmin, testController);

//Protected User Route Auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//Protected Admin Route Auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//Update Profile
router.put("/profile", requireSignIn, updateProfileController);

export default router;
