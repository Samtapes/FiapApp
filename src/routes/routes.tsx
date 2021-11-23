/* eslint-disable prettier/prettier */

import React, {useContext} from 'react';
import AuthContext from '../contexts/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const {loading, user} = useContext(AuthContext);

  return (loading && user !== null) || (loading) || (loading === false && user !== null) ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
