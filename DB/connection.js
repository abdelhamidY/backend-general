import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("general", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export const drowTables = async () => {
  return await sequelize
    .sync({ alter: true })
    .then((response) => {
      console.log("successful connected to database");
    })
    .catch((err) => {
      console.log("failed to connect database", err);
    });
};
