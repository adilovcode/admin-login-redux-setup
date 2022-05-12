import React from "react";
import LoginPage from "./LoginPage";
import { connect, DispatchProp } from "react-redux";
import IState from "../../../../redux/state";
import { ILoginFormState } from ".";
import { submitFormData } from "./actions";

interface ILoginContainerProps {
  form: ILoginFormState;
}

type Props = ILoginContainerProps & DispatchProp;

const LoginContainer: React.FC<Props> = (props) => {
  const handleSubmitForm = async (formData: ILoginFormState): Promise<any> => {
    return props.dispatch<any>(submitFormData(formData));
  };

  return <LoginPage form={props.form} onSubmit={handleSubmitForm} />;
};

const mapStateProps = (state: IState) => ({
  form: state.login.form,
});

export default connect(mapStateProps)(LoginContainer);
