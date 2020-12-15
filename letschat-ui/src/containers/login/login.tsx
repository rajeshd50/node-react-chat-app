import React, { useEffect } from 'react'
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
} from 'react-icons/ri'
import { useToaster } from '../../_common/hooks/custom/appToasterHook';
import { useUserApi } from '../../_common/hooks/api/appUserApiHook';
import Loader from '../../components/loader/loader';
import { useAppGlobalAction } from '../../_common/hooks/actions/appGlobalActionHook';

interface LoginFormValues {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
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

function Login() {
  /**
   * const
   */
  const { register, control, setValue, handleSubmit, errors } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const toast = useToaster()
  const userApi = useUserApi()
  /**
   * effects
   */

  /**
   * functions
   */
  const onLoginSubmit = (values: LoginFormValues) => {
    userApi.callDoLogin(values, () => {}, (message: string) => {
      toast.error(message);
    })
  }
  return (
    <div className="login-box-container">
      <div className="login-box">
        <div className="login-logo-container">
          <img src="/images/icons/android-icon-512x512.png" />
        </div>
        <h2 className="login-text">Login</h2>
        <div className="login-form-container">
          <form onSubmit={handleSubmit(onLoginSubmit)} noValidate>
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
                    Login
                    <AiOutlineRight />
                  </button>
                </div>
                <div className="col-12 login-form-col signup-link-col">
                  New here? <Link to={URLS.SIGNUP}>Signup</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
