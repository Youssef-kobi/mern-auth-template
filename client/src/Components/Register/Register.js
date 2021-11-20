import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Classes from "./Register.module.css";

const Register = () => {
  const validationSchema = Yup.object({
    product: Yup.string().required("Please select a product").oneOf(products),
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    title: Yup.string().required(),
    review: Yup.string().required(),
    rating: Yup.number().min(1).max(10).required(),
    date: Yup.date().default(() => new Date()),
    wouldRecommend: Yup.boolean().default(false),
  });
  return (
    <div className={Classes.main}>
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
          confPassword: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <>
            <h1>Register</h1>
            <Form className={Classes.form}>
              <div className={Classes.groupform}>
                <label htmlFor="userName">Username</label>
                <Field
                  type="text"
                  name="userName"
                  placeholder="Enter a username"
                  className={`${Classes.formControl} ${
                    formik.errors.email ? Classes.invalid : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  // className="invalid-feedback"
                />
              </div>
              <div className={Classes.groupform}>
                <label htmlFor="email">email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className={`${Classes.formControl} ${
                    formik.errors.email ? Classes.invalid : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  className="invalid-feedback"
                />
              </div>
              <div className={Classes.groupform}>
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className={`form-control ${
                    formik.errors.password ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="invalid-feedback"
                />
              </div>
              <button
                type="submit"
                //  className="btn btn-primary btn-block"
              >
                Log in
              </button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Register;
