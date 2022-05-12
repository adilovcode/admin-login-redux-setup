import React from 'react';
import {
  Button as BaseButton,
  ButtonProps,
  CircularProgress
} from '@mui/material';

type ILoadingProps = {
  loading?: boolean;
};

type IProps = ButtonProps & ILoadingProps;

const Button: React.FC<IProps> = (props) => {
  return (
    <BaseButton {...props} disabled={props.loading || props.disabled}>
      {props.loading ? <CircularProgress color="primary" /> : props.children}
    </BaseButton>
  );
};

export default Button;
