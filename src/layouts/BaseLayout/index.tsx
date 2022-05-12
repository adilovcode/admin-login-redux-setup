import { FC, ReactNode, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Outlet, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import IState from 'src/redux/state';
import { fetchUserInformation } from 'src/domain/auth/components/login/actions';
import { CircularProgress } from '@mui/material';

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const user = useSelector<IState>((state) => state.login.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchUserInformation()).then(() => {
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  return loading ? <CircularProgress/> : (user ? <>{children || <Outlet />}</> : <Navigate to="/auth/login" />);
};

BaseLayout.propTypes = {
  children: PropTypes.node
};

export default BaseLayout;
