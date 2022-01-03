import PropTypes from 'prop-types'
import {
  Checkbox,
  FormHelperText,
  FormLabel,
  Link,
  FormControl,
} from '@material-ui/core'
import { useField, Field } from 'formik'

const CheckboxField = ({ name, label, formik }) => {
  const [field, meta] = useField(name)
  let Error = {
    error: false,
    helperText: '',
  }
  if (meta && meta.touched && meta.error) {
    Error = {
      error: true,
      helperText: meta.error,
    }
  }
  const handleChange = (event) => {
    formik.setFieldValue(name, event.target.checked)
  }
  return (
    <>
      <Field
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
        onChange={handleChange}
        component={Checkbox}
        label={label}
        name={name}
      />
      <FormLabel name={name}>
        {label}
        <Link href='google.com'>Terms and Conditions</Link>
      </FormLabel>
      <FormControl>
        <FormHelperText error={Error.error} component='p' name={name}>
          {Error.helperText}
        </FormHelperText>
      </FormControl>
    </>
  )
}
CheckboxField.propTypes = {
  formik: PropTypes.shape({
    setFieldValue: PropTypes.func,
  }).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}
export default CheckboxField
