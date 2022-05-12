import { useDispatch, useSelector } from "react-redux"
import { IUserState } from "src/domain/auth/components/login";
import { storeUserInformation } from "src/domain/auth/components/login/actions";
import IState from "src/redux/state";

type IUseAuth = {
    user: IUserState | null,
    isLoggedIn: boolean
}

export const useAuth = (): IUseAuth => {
    const user = useSelector<IState, IUserState>(state => state.login.user);

    return { user, isLoggedIn: !!user };
}

export const useLogout = (): Function => {
    const dispatch = useDispatch();

    return () => dispatch<any>(storeUserInformation(null));
}