import React from 'react';
import Loader from '../../components/loader/loader';

const LazySignup = React.lazy(() =>
  import(/* webpackChunkName: "Signup" */ './signup')
);

const Signup = (props: any) => (
  <React.Suspense fallback={<Loader/>}>
    <LazySignup {...props} />
  </React.Suspense>
);

export default Signup