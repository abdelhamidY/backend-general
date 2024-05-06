import ProductModel from "../DB/models/product.model.js";

const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.findAll();
    res.status(200).json({ message: "success", products });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, description, image, CategoryId, quantity } = req.body;
    const product = await ProductModel.create({
      name,
      price,
      description,
      image,
      CategoryId,
      quantity,
    });
    res.status(200).json({ message: "success", product });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, price, description, image, category_id, quantity } = req.body;
    const { id } = req.params;
    const [numOfRows, UpdatedProduct] = await ProductModel.update(
      { name, price, description, image, category_id, quantity },
      { where: { id }, returning: true }
    );
    res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.destroy({ where: { id } });
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await ProductModel.findAll({ where: { CategoryId: id } });
    res.status(200).json({ message: "success", products });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
};
