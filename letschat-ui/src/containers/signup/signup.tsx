import React from 'react'
import { Link } from 'react-router-dom'
import TextInput from '../../components/TextInput/textInput'
import { URLS } from '../../config'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import {
  AiOutlineMail,
  AiOutlineRight,
} from 'react-icons/ai'
import {
  RiLockPasswordLine,
  RiWechat2Line,
} from 'react-icons/ri'
import { useUserApi } from '../../_common/hooks/api/appUserApiHook';
import { useToaster } from '../../_common/hooks/custom/appToasterHook';

interface SignUpFormValues {
  email: string;
  name: string;
  password: string;
}

const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required'),
  email: yup
    .string()
    .email('Please provide valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password should have minimum 5 characters')
    .max(20, 'Max 20 characters are allowed')
})

function Signup() {
  /**
   * const
   */
  const { register, control, setValue, handleSubmit, errors } = useForm<SignUpFormValues>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      name: ''
    },
  })
  const toast = useToaster()
  const userApi = useUserApi()
  /**
   * functions
   */
  const onSignUpSubmit = (values: SignUpFormValues) => {
    userApi.callDoRegister(values, () => { }, (message: string) => {
      toast.error(message);
    })
  }
  return (
    <div className="login-box-container">
      <div className="login-box">
        <div className="login-logo-container">
          <img src="/images/icons/android-icon-512x512.png" />
        </div>
        <h2 className="login-text">Signup</h2>
        <div className="login-form-container">
          <form onSubmit={handleSubmit(onSignUpSubmit)} noValidate>
            <div className="container-fluid">
              <div className="row login-form-row">
                <div className="col-12 login-form-col">
                  <Controller
                    control={control}
                    name="email"
                    render={({ onChange, onBlur, value, name, ref }) => (
                      <TextInput
                        name={name}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        inputRef={ref}
                        icon={<AiOutlineMail />}
                        type="email"
                        error={errors.email}
                        placeholder="Your email address..."
                      />
                    )}
                  />
                </div>
                <div className="col-12 login-form-col">
                  <Controller
                    control={control}
                    name="name"
                    render={({ onChange, onBlur, value, name, ref }) => (
                      <TextInput
                        name={name}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        inputRef={ref}
                        icon={<RiWechat2Line />}
                        type="name"
                        error={errors.name}
                        placeholder="Your name..."
                      />
                    )}
                  />
                </div>
                <div className="col-12">
                  <Controller
                    control={control}
                    name="password"
                    render={({ onChange, onBlur, value, name, ref }) => (
                      <TextInput
                        name={name}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        inputRef={ref}
                        icon={<RiLockPasswordLine />}
                        type="password"
                        error={errors.password}
                        placeholder="Your password..."
                      />
                    )}
                  />
                </div>
                <div className="col-12 login-form-action-col">
                  <button type="submit" className="btn btn-primary">
                    Signup
                    <AiOutlineRight />
                  </button>
                </div>
                <div className="col-12 login-form-col signup-link-col">
                  Already have an account? <Link to={URLS.LOGIN}>Login</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
