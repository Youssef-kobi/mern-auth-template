import Fields from "../../Fields/Fields";
import { Grid } from "@material-ui/core";
const RegisterPersonal = (props) => {
  const {
    profileImg,
    firstName,
    lastName,
    userName,
    email,
    phone,
    country,
    password,
    confPassword,
  } = props.formField;

  return (
    <>
      <Grid container spacing={2}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
        >
          <Fields formik={props.formik} field={profileImg} />
        </Grid>
        <Grid item xs={6}>
          <Fields field={firstName} />
        </Grid>
        <Grid item xs={6}>
          <Fields field={lastName} />
        </Grid>
        <Grid item xs={12}>
          <Fields field={userName} />
        </Grid>
        <Grid item xs={12}>
          <Fields field={email} />
        </Grid>
        <Grid item xs={12}>
          <Fields field={phone} />
        </Grid>
        <Grid item xs={12}>
          <Fields formik={props.formik} field={country} />
        </Grid>
        <Grid item xs={6}>
          <Fields formik={props.formik} field={password} />
        </Grid>
        <Grid item xs={6}>
          <Fields formik={props.formik} field={confPassword} />
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterPersonal;
