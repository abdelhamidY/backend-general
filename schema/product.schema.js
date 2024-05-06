import * as yup from "yup";
export const productSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  price: yup.number().required("Price is required"),
  description: yup.string().required("Description is required"),
  image: yup.string().required("Image is required"),
  CategoryId: yup.number().required("Category id is required"),
  quantity: yup.number().required("Quantity is required"),
});
