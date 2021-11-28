import Fields from "../../Fields";
import { Grid } from "@material-ui/core";
const RegisterPersonal = (props) => {
  const { profileImg, firstName, lastName, userName, email, phone, country } =
    props.formField;

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
          <Fields setFieldValue={props.setFieldValue} field={profileImg} />
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
          <Fields field={country} />
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterPersonal;
