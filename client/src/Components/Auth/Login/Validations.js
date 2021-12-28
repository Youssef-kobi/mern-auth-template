import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email().required("required"),
  password: Yup.string()
    .required("Please Enter your password")
    .min(8)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});
export default validationSchema;
