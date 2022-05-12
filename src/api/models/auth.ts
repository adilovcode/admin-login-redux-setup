import { ILoginFormState, ILoginResponse, IUserState } from "src/domain/auth/components/login";
import api from "../api";
import ROUTES from "../routes";

const auth = {
    login: (values: ILoginFormState) => api.post<ILoginResponse>(ROUTES.LOGIN, values),
    me: () => api.get<IUserState>(ROUTES.ME)
}

export default auth;