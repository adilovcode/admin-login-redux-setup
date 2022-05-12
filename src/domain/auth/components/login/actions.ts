import { FormUpdateActionType, ILoginFormState, ILoginResponse, IUserState, TOKEN_STORAGE_KEY, UpdateUserActionType, USER_STORAGE_KEY } from ".";
import { UPDATE_FORM, UPDATE_USER_INFO } from "./actionsTypes";
import { Dispatch } from "redux";
import auth from "src/api/models/auth";

export const storeUserInformation = (userInformation: IUserState | null): UpdateUserActionType => ({
    type: UPDATE_USER_INFO,
    payload: userInformation
});

export const updateFormDate = (formData: ILoginFormState): FormUpdateActionType => ({
    type: UPDATE_FORM,
    payload: formData
});

export const submitFormData = (formData: ILoginFormState) => async () => {
    const response = await auth.login(formData);
    storeAuthDataToStorage(response.data);
    location.href = '/';
    return response;
}

export const fetchUserInformation = () => async (dispatch: Dispatch) => {
    if (!localStorage.getItem(TOKEN_STORAGE_KEY)) return;
    const response = await auth.me();
    dispatch(storeUserInformation(response.data));
    return response;
}

/**
 * Stores user info to storage
 *
 * @param loginResponse
 */
 export const storeAuthDataToStorage = (loginResponse: ILoginResponse) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, loginResponse.token);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(loginResponse.user));
};

/**
 * Removes data from local storage
 */
export const removeAuthDataFromStorage = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
};