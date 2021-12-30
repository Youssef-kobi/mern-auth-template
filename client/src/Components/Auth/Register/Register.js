import { Formik, Form } from "formik";

import Classes from "./Register.module.css";
import formFields from "./RegisterFormData";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import RegisterPersonal from "./RegisterSteps/RegisterPersonal/RegisterPersonal";
import RegisterShop from "./RegisterSteps/RegisterShop/RegisterShop";
import validationSchema from "./Validations";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../store/authContext";
import axios from "axios";

const renderStepContent = (step, formik) => {
  switch (step) {
    case 0:
      return <RegisterPersonal formik={formik} formField={formFields} />;
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
  const steps = ["Personal information", "Shop details"];
  const initialValues = {
    profilePicture: null,
    firstName: "",
    lastName: "",
    // userName: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confPassword: "",
    // step 2 From
    shopImg: null,
    shopAddress: "",
    postalCode: "",
    shopName: "",
    shopSite: "",
    shopType: "",
    shopPhoneNumber: "",
    shopEmail: "",
    salesTax: "",
    termsOfUse: false,
  };
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;
  const AuthCtx = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (AuthCtx.isLoggedIn) {
      console.log(AuthCtx.isLoggedIn)
      navigate("/");
    }

  },)
  const submitForm = async (values, actions) => {
    const user = { ...values };
    // try {
    //   console.log(user)
    //   const res = await fetch("http://172.22.74.211:8000/api/users/register", {
    //     method: "POST",
    //     body: JSON.stringify(user),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   navigate("/");
    //   console.log(await res.json());
    // } catch (err) {
    //   console.log(err);
    // }
    
    axios
      .post("http://172.22.74.211:8000/api/users/register", user)
      .then((response) => {
        AuthCtx.login(response.data.user.token);
        console.log('response');
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          // actions.setFieldError("email", "email is already used");
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };
  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

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
                <Button
                  type="button"
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  Back
                </Button>
              )}
              <div>
                <Button
                  disabled={formik.isSubmitting}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {isLastStep ? "Submit" : "Next"}
                </Button>
              </div>
            </div>
            {formik.isSubmitting && <CircularProgress size={24} />}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
