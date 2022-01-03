import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import Fields from '../../../Fields/Fields'

const RegisterPersonal = ({
  formik,
  formField: {
    profileImg,
    firstName,
    lastName,
    email,
    phone,
    country,
    password,
    confPassword,
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
        <Fields formik={formik} Field={profileImg} />
      </Grid>
      <Grid item xs={6}>
        <Fields Field={firstName} />
      </Grid>
      <Grid item xs={6}>
        <Fields Field={lastName} />
      </Grid>
      <Grid item xs={12}>
        <Fields Field={email} />
      </Grid>
      <Grid item xs={6}>
        <Fields formik={formik} Field={country} />
      </Grid>
      <Grid item xs={6}>
        <Fields Field={phone} />
      </Grid>
      <Grid item xs={6}>
        <Fields formik={formik} Field={password} />
      </Grid>
      <Grid item xs={6}>
        <Fields formik={formik} Field={confPassword} />
      </Grid>
    </Grid>
  )
}
RegisterPersonal.propTypes = {
  formik: PropTypes.shape({
    setFieldValue: PropTypes.func,
  }).isRequired,
  formField: PropTypes.objectOf(PropTypes.object).isRequired,
  // PropTypes.shape({
  // profileImg: PropTypes.instanceOf(Object),
  // firstName: PropTypes.string.isRequired,
  // lastName: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired,
  // country: PropTypes.string.isRequired,
  // password: PropTypes.string.isRequired,
  // confPassword: PropTypes.string.isRequired,
  // }).isRequired,
}
export default RegisterPersonal
