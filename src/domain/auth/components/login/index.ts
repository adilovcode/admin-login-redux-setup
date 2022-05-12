import * as Yup from 'yup';

export const TOKEN_STORAGE_KEY = 'jwt-token';
export const USER_STORAGE_KEY = 'user';

export interface ILoginFormState {
    email: string | null,
    password: string | null
}

export interface IUserState {
    id: string,
    email: string,
    name: string
}

export interface ILoginState {
    form: ILoginFormState,
    user: IUserState | null
};

// Action types
export type FormUpdateActionType = {
    type: string,
    payload: ILoginFormState
}

export type UpdateUserActionType = {
    type: string,
    payload: IUserState
}

// Default state
export const defaultFormState = {
    email: "",
    password: ""
}

export const defaultState: ILoginState = {
    form: defaultFormState,
    user: null
}

export const defaultValidationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required()
});

// Responses
export type ILoginResponse = {
    token: string,
    user: IUserState
}

export type ActionTypes = FormUpdateActionType & UpdateUserActionType;