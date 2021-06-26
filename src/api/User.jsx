import { createContext, useContext, useMemo, useState } from "react";

export const UserContext = createContext({
    user: null,
    setUser: () => {
        throw new Error("Not implemented");
    },
});

export function ProvideUser(props) {
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
