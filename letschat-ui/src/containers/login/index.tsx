import React from 'react';
import Loader from '../../components/loader/loader';

const LazyLogin = React.lazy(() =>
  import(/* webpackChunkName: "Login" */ './login')
);

const Login = (props: any) => (
  <React.Suspense fallback={<Loader/>}>
    <LazyLogin {...props} />
  </React.Suspense>
);

export default Login