import * as Yup from "yup";

export const RegularValidation = Yup.object({
  first_name: Yup.string()
    .min(2)
    .max(20)
    .required("Please enter your first name"),
  last_name: Yup.string()
    .min(2)
    .max(20)
    .required("Please enter your last name"),
  email: Yup.email().required("Please enter your email"),
  phone_number: Yup.string()
    .min(10)
    .max(10)
    .required("Please enter your phone number"),
  address: Yup.string().max(50).required("Please enter your address"),
  city: Yup.string.max(20).required("Please enter your city"),
  State: Yup.string().max(20).required("Please enter your state"),
  pincode: Yup.string().min(6).max(6).required("Please enter your pincode"),
});
