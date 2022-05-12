import { ActionTypes, defaultState, ILoginState } from ".";
import { UPDATE_FORM, UPDATE_USER_INFO } from "./actionsTypes";

const reducer = (state = defaultState, actions: ActionTypes): ILoginState => {
    switch (actions.type) {
        case UPDATE_FORM:
            return { ...state, form: actions.payload };
        case UPDATE_USER_INFO:
            return { ...state, user: actions.payload };
        default:
            break;
    }

    return state;
}

export default reducer;