import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
} from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ILoginFormState } from '.';
import LoginForm from './LoginForm';

interface ILoginPageProps {
  form: ILoginFormState;
  onSubmit: (formData: ILoginFormState) => Promise<any>;
}

const LoginPage: React.FC<ILoginPageProps> = (props) => {
  return (
    <div>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          mt={6}
        >
          <Grid item xs={6}>
            <Card>
              <CardHeader style={{ textAlign: 'center' }} title="Login" />
              <Divider />
              <CardContent>
                <LoginForm onSubmit={props.onSubmit}/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LoginPage;
