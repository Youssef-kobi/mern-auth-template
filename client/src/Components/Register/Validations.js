import * as Yup from "yup";
import { countries, ShopTypes } from "./RegisterForm/Fields/Options";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const URL =
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;

const validationSchema = [
  Yup.object({
    firstName: Yup.string()
      .min(3, "First name must be at least 3 characters")
      .max(20, "First name must be at most 20 characters")
      .required("required"),
    userName: Yup.string()
      .min(3, "First name must be at least 3 characters")
      .max(20, "First name must be at most 20 characters")
      .matches(
        "^[a-zA-Z0-9]*$",
        "Must Contain Characters uppercase, Lowercase,Number and one special case Character"
      )
      .required("required"),
    lastName: Yup.string()
      .min(3, "Last name must be at least 3 characters")
      .max(20, "Last name must be at most 20 characters")
      .required("required"),
    email: Yup.string().email().required("required"),
    phone: Yup.string().matches(
      phoneRegExp,
      "This is not a valide phone number"
    ),
    country: Yup.string()
      .oneOf(
        countries.map((e) => e.label),
        "Country Not found"
      )
      .required("required"),
    password: Yup.string()
      .required("Please Enter your password")
      .min(8)
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  }),
  Yup.object({
    shopAddress: Yup.string().required("required"),
    postalCode: Yup.number("Must contain a zipcode"),
    shopName: Yup.string()
      .min(3, "Last name must be at least 3 characters")
      .max(20, "Last name must be at most 20 characters")
      .required("required"),
    shopSite: Yup.string().matches(URL, "Enter a valid url"),
    shopType: Yup.string()
      .oneOf(
        ShopTypes.map((e) => e.label),
        "Shop Type Not found"
      )
      .required("required"),
    shopPhoneNumber: Yup.string().matches(
      phoneRegExp,
      "Not a valide phone number"
    ),
    shopEmail: Yup.string().email().required("Email is required"),
    salesTax: Yup.number("Must contain a  zipcode"),
    termsOfUse: Yup.boolean()
      .required("The terms and conditions must be accepted.")
      .oneOf([true], "The terms and conditions must be accepted."),
  }),
];
export default validationSchema;
