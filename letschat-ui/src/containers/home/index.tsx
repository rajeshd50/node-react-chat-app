import React from 'react';
import Loader from '../../components/loader/loader';

const LazyHome = React.lazy(() =>
  import(/* webpackChunkName: "Home" */ './home')
);

const Home = (props: any) => (
  <React.Suspense fallback={<Loader/>}>
    <LazyHome {...props} />
  </React.Suspense>
);

export default Home