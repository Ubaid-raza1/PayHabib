import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './FlagInput.css';

const FlagInput = ({ formik, label }) => {
  const { setFieldValue, values, errors, touched } = formik;

  const handlePhoneChange = (newValue) => {
    setFieldValue('phoneNumber', newValue);
  };

  return (
    <div className="flag-input-container">
      <label>{label}</label>
      <PhoneInput
        style={{ borderColor: errors.phoneNumber && touched.phoneNumber ? 'red' : '#c7c7c7' }}
        international
        defaultCountry="US"
        placeholder="Enter phone number"
        value={values.phoneNumber}
        onChange={handlePhoneChange}
        onBlur={formik.handleBlur('phoneNumber')}
      />
      {errors.phoneNumber && touched.phoneNumber && <div style={{ color: 'red' }}>{errors.phoneNumber}</div>}
    </div>
  );
};

export default FlagInput;
