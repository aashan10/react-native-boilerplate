import React, { createContext, useState } from 'react';

interface UserContextState {
    user: UserInterface | false,
    setUser: (user: UserInterface | false) => void,
}

interface UserInterface {
    access_token: string,
    refresh_token: string | null,
    email: string,
    username: string,
    profile_image: null | string
}

const UserContext = createContext<UserContextState>({
    user: false,
    setUser: (user: UserInterface | false) => { },
});

const UserConsumer = UserContext.Consumer;

const UserProvider = ({ children }: { children: React.ReactElement }) => {
    const [user, setUser] = useState<UserInterface | false>(false);
    return (
        <UserContext.Provider value={{
            user: user,
            setUser: setUser,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserConsumer, UserProvider }
export type { UserContextState, UserInterface }