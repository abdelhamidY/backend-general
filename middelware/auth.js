import Jwt from "jsonwebtoken";
import UserModel from "../DB/models/user.model.js";
export const checkAuth = () => {
  return async (req, res, next) => {
    console.log("req.headers", req.headers);
    try {
      const { authorization } = req.headers;
      if (!authorization?.startsWith(process.env.BearerKey)) {
        res.json({ message: "In-valid token or In-valid Bearer Key" });
      } else {
        const token = authorization.split(process.env.BearerKey)[1].trim();
        const decoded = Jwt.verify(token, process.env.TOKEN_SIGNUTURE);

        console.log("decoded", decoded);

        if (!decoded?.id) {
          res.json({ message: "In-valid payload" });
        } else {
          const user = await UserModel.findOne({
            where: { id: decoded.id },
          });
          if (!user) {
            res.status(400).json({ message: "In-valid Token user" });
          } else {
            req.user = user;
            next();
          }
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Catch error", error });
    }
  };
};
