import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import IState from 'src/redux/state';

const AuthLayout: React.FC = () => {
  const user = useSelector<IState>((state) => state.login.user);

  return user ? <Navigate to={'/'} /> : <Outlet />;
};

export default AuthLayout;
