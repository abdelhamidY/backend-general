import userModel from "../DB/models/user.model.js";

async function seedEmptyTables() {
  try {
    await userModel.truncate();
    console.log("all tables data is deleted successfully");
  } catch (error) {
    console.log("Catch error", error);
  }
}

seedEmptyTables();
