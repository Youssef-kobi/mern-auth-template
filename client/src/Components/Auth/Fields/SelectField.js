import Autocomplete from '@mui/material/Autocomplete'
import { TextField, Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useField } from 'formik'

const SelectField = ({ name, label, options, formik }) => {
  const [field, meta] = useField(name)
  const inputHandler = (event, value) => {
    formik.setFieldValue(name, value !== null && value.label)
  }
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
  return (
    <Autocomplete
      onChange={inputHandler}
      options={options}
      autoHighlight
      getOptionLabel={(option) => option.label || ''}
      renderOption={(prop, option) => {
        return (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Box {...prop} component='li'>
            {name === 'country' && (
              <img
                loading='lazy'
                width='20'
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=''
              />
            )}
            {option.label}
          </Box>
        )
      }}
      renderInput={(params) => {
        return (
          <TextField
            helperText={Error.helperText}
            label={label}
            error={Error.error}
            name={name}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...field}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )
      }}
    />
  )
}
SelectField.propTypes = {
  formik: PropTypes.shape({
    setFieldValue: PropTypes.func,
  }).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
}
export default SelectField
