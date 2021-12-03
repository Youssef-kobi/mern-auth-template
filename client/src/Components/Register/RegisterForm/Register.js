import { Formik, Form } from "formik";
import * as Yup from "yup";
import Classes from "./Register.module.css";
import formFields from "./RegisterFormData";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { useState } from "react";
import RegisterPersonal from "./RegisterSteps/RegisterPersonal/RegisterPersonal";
import RegisterShop from "./RegisterSteps/RegisterShop/RegisterShop";
import { countries, ShopTypes } from "./Options";

const renderStepContent = (step, formik) => {
  switch (step) {
    case 0:
      return <RegisterPersonal formik={formik} formField={formFields} />;
    // break;
    case 1:
      return <RegisterShop formik={formik} formField={formFields} />;
    case 2:
      break;
    // return <ReviewOrder />;
    default:
      return <div>Not Found</div>;
  }
};
const Register = () => {
  const steps = ["Personal information", "Shop details", "Review your order"];
  const initialValues = {
    profilePicture: null,
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confPassword: "",
    // step 2 From
    shopAddress: "",
    postalCode: "",
    shopName: "",
    shopSite: "",
    shopType: "",
    shopPhoneNumber: "",
    shopEmail: "",
    salesTax: "",
  };
  const [activeStep, setActiveStep] = useState(0);
  // const [isSubmitting, setisSubmitting] = useState(false);
  const isLastStep = activeStep === steps.length - 1;
  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      // _submitForm(values, actions);
    } else {
      console.log(values);
      setActiveStep(activeStep + 1);
      // console.log(values);
      // actions.setTouched({});
      actions.setSubmitting(false);
    }
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
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
      userName: Yup.string(),
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
      confPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ).required("Please confirm your password"),
    }),
    Yup.object({
      shopAddress: Yup.string()
        // .min(3, "Last name must be at least 3 characters")
        // .max(20, "Last name must be at most 20 characters")
        .required("required"),
      postalCode: Yup.number("Must contain a zipcode"),
      shopName: Yup.string()
        .min(3, "Last name must be at least 3 characters")
        .max(20, "Last name must be at most 20 characters")
        .required("required"),
      shopSite: Yup.string().matches(URL, "Enter a valid url"),
      // .required("required"),
      shopType: Yup.string()
        .oneOf(
          ShopTypes.map((e) => e.label),
          "ShopType Not found"
        )
        .required("required"),
      shopPhoneNumber: Yup.string().matches(
        phoneRegExp,
        "Not a valide phone number"
      ),
      shopEmail: Yup.string().email().required("Email is required"),
      salesTax: Yup.number("Must contain a  zipcode"),
      // rating: Yup.number().min(1).max(10).required(),
      // date: Yup.date().default(() => new Date()),
      // wouldRecommend: Yup.boolean().default(false),
    }),
  ];
  const currentValidationSchema = validationSchema[activeStep];
  return (
    <div className={Classes.main}>
      <Stepper
        className={Classes.stepper}
        alternativeLabel
        activeStep={activeStep}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Formik
        initialValues={initialValues}
        validationSchema={currentValidationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className={Classes.form}>
            {renderStepContent(activeStep, formik)}

            <div className={Classes.btnsflex}>
              {activeStep !== 0 && !formik.isSubmitting && (
                <Button type="button" onClick={handleBack}>
                  Back
                </Button>
              )}
              <div>
                <Button
                  disabled={formik.isSubmitting}
                  type="submit"
                  variant="contained"
                  color="primary"
                  // className={classes.button}
                >
                  {isLastStep ? "Place order" : "Next"}
                </Button>
                {formik.isSubmitting && (
                  <CircularProgress
                    size={24}
                    // className={classes.buttonProgress}
                  />
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
