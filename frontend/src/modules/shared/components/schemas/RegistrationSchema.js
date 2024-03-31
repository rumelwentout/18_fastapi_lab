import * as yup from 'yup';

export const registrationSchema = yup.object({
  username: yup.string()
    .min(6, 'Username must be at least 6 characters long')
    .required('Required'),
  password: yup.string()
    .min(7, 'Password must be at least 7 characters long')
    .required('Required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  email: yup.string().email('Invalid email format').required('Required'),
  phoneNumber: yup.string()
    .matches(/^\d{11}$/, 'Phone number must have exactly 11 digits')
    .required('Required')
});