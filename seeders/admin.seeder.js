import userModel from "../DB/models/user.model.js";
import bcrypt from "bcrypt";

async function seedAdmin() {
  try {
    const admin = await userModel.findOne({ where: { role: "admin" } });
    if (admin) {
      console.log("Admin account already exists. Seeder skipped.");
      return;
    }

    const hashedPassword = await bcrypt.hash("123456789", 10);
    const newAdmin = new userModel({
      username: "admin",
      password: hashedPassword,
      role: "admin",
      email: "admin@admin.com",
      phone_number: "01000000000",
    });

    await newAdmin.save();
    console.log("Admin account created successfully.");
  } catch (error) {
    console.error("Error creating admin account:", error);
  }
}

seedAdmin();
