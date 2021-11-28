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

const renderStepContent = (step,setFieldValue) => {
  switch (step) {
    case 0:
      return <RegisterPersonal setFieldValue={setFieldValue} formField={formFields} />;
    // break;
    case 1:
      return <RegisterShop formField={formFields} />;
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
    phoneNumber: "",
  };
  const [activeStep, setActiveStep] = useState(0);
  // const [isSubmitting, setisSubmitting] = useState(false);
  const isLastStep = activeStep === steps.length - 1;
  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      console.log(values);
      // _submitForm(values, actions);
    } else {
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
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(3, "First name must be at least 3 characters")
      .max(20, "First name must be at most 20 characters")
      .required("required"),
    lastName: Yup.string()
      .min(3, "Last name must be at least 3 characters")
      .max(20, "Last name must be at most 20 characters")
      .required("required"),
    email: Yup.string().email().required(),
    phone: Yup.string().matches(
      phoneRegExp,
      "This is not a valide phone number"
    ),
    // rating: Yup.number().min(1).max(10).required(),
    // date: Yup.date().default(() => new Date()),
    // wouldRecommend: Yup.boolean().default(false),
  });
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
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className={Classes.form}>
             
            {renderStepContent(activeStep,setFieldValue)}
  
            <div className={Classes.btnsflex}>
              {activeStep !== 0 && !isSubmitting && (
                <Button type="button" onClick={handleBack}>
                  Back
                </Button>
              )}
              <div>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                  color="primary"
                  // className={classes.button}
                >
                  {isLastStep ? "Place order" : "Next"}
                </Button>
                {isSubmitting && (
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
