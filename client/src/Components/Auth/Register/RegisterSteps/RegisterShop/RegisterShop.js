import Fields from "../../../Fields/Fields";
import { Grid} from "@material-ui/core";

const RegisterShop = (props) => {
  const {
    shopImg,
    shopAddress,
    postalCode,
    shopName,
    shopSite,
    shopType,
    shopPhoneNumber,
    shopEmail,
    salesTax,
    termsOfUse,
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
          <Fields formik={props.formik} field={shopImg} />
        </Grid>
        <Grid item xs={10}>
          <Fields field={shopAddress} />
        </Grid>
        <Grid item xs={2}>
          <Fields field={postalCode} />
        </Grid>
        <Grid item xs={6}>
          <Fields field={shopName} />
        </Grid>
        <Grid item xs={6}>
          <Fields field={shopSite} />
        </Grid>
        <Grid item xs={6}>
          <Fields formik={props.formik} field={shopType} />
        </Grid>
        <Grid item xs={6}>
          <Fields field={shopPhoneNumber} />
        </Grid>
        <Grid item xs={12}>
          <Fields field={shopEmail} />
        </Grid>
        <Grid item xs={12}>
          <Fields field={salesTax} />
        </Grid>
        <Grid item xs={12}>
          <Fields formik={props.formik} field={termsOfUse} />
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterShop;
