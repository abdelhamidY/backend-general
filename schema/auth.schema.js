import * as yup from "yup";
export const registrationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  username: yup.string().required("Name is required"),
  phone_number: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must only contain digits")
    .required("Phone number is required"),
});

export const loginSchema = yup.object().shape({
  phone_number: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must only contain digits")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
