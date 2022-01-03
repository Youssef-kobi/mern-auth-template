import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import Fields from '../../../Fields/Fields'

const RegisterShop = ({
  formik,
  formField: {
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
  },
}) => {
  return (
    <Grid container spacing={2}>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        item
        xs={12}
      >
        <Fields formik={formik} Field={shopImg} />
      </Grid>
      <Grid item xs={10}>
        <Fields Field={shopAddress} />
      </Grid>
      <Grid item xs={2}>
        <Fields Field={postalCode} />
      </Grid>
      <Grid item xs={6}>
        <Fields Field={shopName} />
      </Grid>
      <Grid item xs={6}>
        <Fields Field={shopSite} />
      </Grid>
      <Grid item xs={6}>
        <Fields formik={formik} Field={shopType} />
      </Grid>
      <Grid item xs={6}>
        <Fields Field={shopPhoneNumber} />
      </Grid>
      <Grid item xs={12}>
        <Fields Field={shopEmail} />
      </Grid>
      <Grid item xs={12}>
        <Fields Field={salesTax} />
      </Grid>
      <Grid item xs={12}>
        <Fields formik={formik} Field={termsOfUse} />
      </Grid>
    </Grid>
  )
}
RegisterShop.propTypes = {
  formik: PropTypes.shape({
    setFieldValue: PropTypes.func,
  }).isRequired,

  formField: PropTypes.objectOf(PropTypes.object).isRequired,
}
export default RegisterShop
