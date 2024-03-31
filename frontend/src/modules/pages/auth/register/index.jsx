import React, { useState } from 'react';
import MainLayout from '../../../layout/MainLayout';
import { Form, Formik } from 'formik';
import { Input } from '../../../shared/components/io';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { registrationSchema } from '../../../shared/components/schemas/RegistrationSchema';

const Flex = ({ children }) => {
  return <div className="">{children}</div>;
};

const InitialValues = {
  username: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: ''
};


const Register = () => {
  const [errMsg, setErrMsg] = useState({ field: '', msg: '' });
  const handleSubmit = async (values) => {
    try {
      console.log(values);
      const response = await axios.post('http://localhost:8000/user/auth/register', values);
      alert('Registration successful!');
      setErrMsg({ field: '', msg: '' });
    } catch (error) {
      // if (error.response && error.response.data.errors) {
      // const errors = error.response.data.errors;
      if (error.response.data.detail[0] === 'U')
        setErrMsg({ field: 'username', msg: 'Username is already Taken' });
      else if (error.response.data.detail[0] === 'E')
        // setErrMsg('Email is already Taken');
        setErrMsg({ field: 'email', msg: 'Email is already Taken' });
      else if (error.response.data.detail[0] === 'P')
        // setErrMsg('Email is already Taken');
        setErrMsg({
          field: 'phoneNumber',
          msg: 'Phone number is already Taken'
        });
      // console.error('Registration error:', error);
      // alert('Registration failed. Please try again.');
    }
  };

  return (
    <MainLayout>
      <div className="flex w-[95%] md:w-[100%] mx-auto mt-[100px] items-center justify-between">
        <div className=" w-[95%] mx-auto md:w-[90%] flex items-center justify-center">
          <Formik
            enableReinitialize={true}
            initialValues={InitialValues}
            validationSchema={registrationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values).finally(() => {
                setSubmitting(false);
              });
            }}
          >
            {({ isSubmitting }) => (
              <Form className="w-[700px]">
                <h1 className='text-[72px] font-bold'>Register Now!</h1>
                <Flex>
                  <Input label="Username" name="username" type="text" />
                  {errMsg?.field === 'username' && (
                    <p className="text-red text-[14px] pb-[5px] font-semibold">
                      {errMsg.msg}
                    </p>
                  )}
                </Flex>
                <Flex>
                  <Input label="Email" name="email" type="text" />
                  {errMsg?.field === 'email' && (
                    <p className="text-red text-[14px] pb-[5px] font-semibold">
                      {errMsg.msg}
                    </p>
                  )}
                </Flex>
                <Flex>
                  <Input label="Password" name="password" type="password" />
                </Flex>
                <Flex>
                  <Input
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                  />
                  {/* <ErrorMessage name="confirmPassword" component="div" className="error-message" /> */}
                </Flex>
                <Flex>
                  <Input label="Phone Number" name="phoneNumber" type="tel" />
                  {errMsg?.field === 'phoneNumber' && (
                    <p className="text-red text-[14px] pb-[5px] font-semibold">
                      {errMsg.msg}
                    </p>
                  )}
                  {/* <ErrorMessage name="phone" component="div" className="error-message" /> */}
                </Flex>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={
                    'bg-brand text-white flex px-6 py-2 rounded-md mt-5'
                  }
                >
                  {isSubmitting ? (
                    <Icon
                      icon={'line-md:loading-twotone-loop'}
                      fontSize={22}
                      className={'mr-2'}
                    />
                  ) : (
                    <Icon
                      icon=""
                      fontSize={24}
                      className={'mr-2'}
                    />
                  )}
                  Register
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
