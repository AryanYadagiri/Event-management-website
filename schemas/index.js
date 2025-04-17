import * as Yup from "yup";

const phoneRegex = /^\d{10}$/;
const pincodeRegex = /^\d{6}$/;

export const RegularValidation = Yup.object({
  first_name: Yup.string()
    .min(2)
    .max(20)
    .required("Please enter your first name"),
  last_name: Yup.string()
    .min(2)
    .max(20)
    .required("Please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  phone_number: Yup.string()
    .matches(phoneRegex, "Invalid number")
    .required("Please enter your phone number"),
  password: Yup.string().min(5).required("Please set password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
  address: Yup.string().max(50).required("Please enter your address"),
  city: Yup.string().max(20).required("Please enter your city"),
  state: Yup.string().max(20).required("Please enter your state"),
  pincode: Yup.string()
    .matches(pincodeRegex, "Invalid pincode")
    .required("Please enter your pincode"),
});

export const VendorValidation = Yup.object({
  first_name: Yup.string()
    .min(2)
    .max(20)
    .required("Please enter your first name"),
  last_name: Yup.string()
    .min(2)
    .max(20)
    .required("Please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  phone_number: Yup.string()
    .matches(phoneRegex, "Invalid number")
    .required("Please enter your phone number"),
  password: Yup.string().min(5).required("Please set password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
  GST_number: Yup.string()
    .matches(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      "Invalid GST number"
    )
    .required("Please enter GST number"),
  address: Yup.string().max(50).required("Please enter your address"),
  city: Yup.string().max(20).required("Please enter your city"),
  state: Yup.string().max(20).required("Please enter your state"),
  pincode: Yup.string()
    .matches(pincodeRegex, "Invalid pincode")
    .required("Please enter your pincode"),
});

// 12ABCDE1234F1Z5

export const ContactUsValidation = Yup.object({
  subject: Yup.string()
    .min(2)
    .max(20)
    .required("Please enter your subject"),
  email: Yup.string().email().required("Please enter your email"),
  message: Yup.string()
  .min(2)
  .max(200)
  .required("Please enter your subject"),
});