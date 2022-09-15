import * as yup from "yup";

export const LoginFormSchema = yup.object({
    emailAddress: yup.string().email('Invalid email address').required('Please enter your email address'),
    password: yup.string().min(8).max(21).required('Invalid password')
})

export const SignupFormSchema = yup.object({
    firstName: yup.string().required('Enter your First Name'),
    lastName: yup.string().required('Enter your Last Name'),
    emailAddress: yup.string().email('Invalid email address').required('Please enter your email address'),
    password: yup.string().min(8).max(21).required('Invalid password'),
    confirmPassword: yup.string().oneOf([yup.ref("password"), "Passwords do not match!"]).required("Re-enter your password to confirm"),
    termsAndConditions: yup.bool().oneOf([true], 'Please accept the terms & conditions to proceed').required()
})