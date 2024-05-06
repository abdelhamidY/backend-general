import CategoryModel from "../DB/models/category.model.js";
const getCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.findAll();
    res.status(200).json({ message: "success", categories });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await CategoryModel.create({ name });
    res.status(200).json({ message: "success", category });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const [numOfRows, UpdatedCategory] = await CategoryModel.update(
      { name },
      { where: { id }, returning: true }
    );
    res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await CategoryModel.destroy({ where: { id } });
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export { getCategories, createCategory, updateCategory, deleteCategory };
