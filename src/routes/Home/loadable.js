import React from 'react';
import loadable from '../../lib/loadable';
import Loading from '../../modules/shared/Loading';

export default loadable(() => import('./index'), {
  fallback: <Loading />,
});
