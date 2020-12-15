import React from 'react';
import Loader from '../../components/loader/loader';

const LazyPageNotFound = React.lazy(() =>
  import(/* webpackChunkName: "PageNotFound" */ './page404')
);

const PageNotFound = (props: any) => (
  <React.Suspense fallback={<Loader/>}>
    <LazyPageNotFound {...props} />
  </React.Suspense>
);

export default PageNotFound