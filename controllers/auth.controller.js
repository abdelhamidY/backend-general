import userModel from "../DB/models/user.model.js";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const signUp = async (req, res) => {
  try {
    const { username, email, password, phone_number, role } = req.body;
    const user = await userModel.findOne({
      where: { phone_number: phone_number },
    });

    if (user) {
      res
        .status(409)
        .json({ message: "this account already exist", error: 409 });
    } else {
      const hashPassword = bcrypt.hashSync(password, 8);
      const user = await userModel.create({
        username,
        email,
        password: hashPassword,
        phone_number,
        role: role || "user",
      });
      const token = Jwt.sign({ id: user.id }, process.env.TOKEN_SIGNUTURE, {
        expiresIn: "24hrs",
      });
      res.status(201).json({ message: "user successful created", user, token });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const signIn = async (req, res) => {
  try {
    const { phone_number, password } = req.body;
    const user = await userModel.findOne({
      where: { phone_number: phone_number },
    });
    if (!user) {
      res.status(400).json({ message: "this account not found" });
    } else {
      const decoded = bcrypt.compareSync(password, user.password);
      if (!decoded) {
        res.status(400).json({ message: "Password not valid", error: 400 });
      } else {
        const token = Jwt.sign({ id: user.id }, process.env.TOKEN_SIGNUTURE, {
          expiresIn: "24hrs",
        });
        res
          .status(201)
          .json({ message: "user loged in successfully", user, token });
      }
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const logOut = async (req, res) => {
  const token = req.headers.authorization.split(" ").slice(1).join(" ");

  res.json({ message: "data", token });
};
