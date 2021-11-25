// import { Field, ErrorMessage } from "formik";
import Fields from "./Fields";
// import * as Yup from "yup";
import { Grid } from "@material-ui/core";
// import Classes from "./RegisterPersonal.module.css";

const RegisterPersonal = (props) => {
  console.log(props);
  const { firstName, lastName, address1, address2, city, zipcode, country } =
    props.formField;
  //   const validationSchema = Yup.object({
  //     // product: Yup.string().required("Please select a product").oneOf(products),
  //     userName: Yup.string().required(),
  //     email: Yup.string().email().required(),
  //     password: Yup.string().required(),
  //     review: Yup.string().required(),
  //     rating: Yup.number().min(1).max(10).required(),
  //     date: Yup.date().default(() => new Date()),
  //     wouldRecommend: Yup.boolean().default(false),
  //   });
  return (
    <>
      {/* <div className={Classes.groupName}> */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Fields field={firstName} />
          </Grid>
          <Grid item xs={12}>
          <Fields field={lastName} />
          </Grid>
          {/* <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid> */}
        </Grid>
        
        {/* <Fields field={lastName} /> */}
        {/* <label htmlFor={firstName.name}>First Name:</label>
        <Field
          type="text"
          name={firstName.name}
          placeholder="First Name"
          className={`${Classes.formControl} ${
            firstName.error ? Classes.invalid : ""
          }`}
        />
        <ErrorMessage
          component="div"
          name="userName"
          // className="invalid-feedback"
        />
        <label htmlFor="lastName">Last Name:</label>
        <Field
          type="text"
          name="lastName"
          placeholder="Last Name"
          // className={`${Classes.formControl} ${
          //   formik.errors.lastName ? Classes.invalid : ""
          // }`}
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
          //   className={`form-control ${
          //     formik.errors.password ? "is-invalid" : ""
          //   }`
          // }
        />
        <ErrorMessage
          component="div"
          name="password"
          className="invalid-feedback"
        />*/}
      {/* </div> */}
    </>
  );
};

export default RegisterPersonal;
