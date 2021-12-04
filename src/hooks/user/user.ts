import { UserContext, UserInterface } from "@app/providers";
import { useContext } from "react";


const useUser = (): UserInterface | false => {
    const { user } = useContext(UserContext);
    return user;
}

const login = (user: UserInterface): UserInterface => {
    const { setUser } = useContext(UserContext);
    setUser(user);
    return user;
}

const logout = (): boolean => {
    const { setUser } = useContext(UserContext);
    setUser(false);
    return true;
}

export { useUser, login, logout };