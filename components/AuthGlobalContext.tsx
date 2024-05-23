import React, { useEffect, useMemo, useState } from "react";
import { DataProvider, GlobalActionsProvider } from "@plasmicapp/host";

export const AuthGlobalContext = ({ children }: React.PropsWithChildren) => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState({});

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser  = localStorage.getItem("user");

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(storedUser ? JSON.parse(storedUser) : {});
        } else {
          setToken("");
          setUser({});
        }
    }, []);

    const actions = useMemo(() => ({
        login: (token: string, user: {}) => {
            setToken(token);
            setUser(user);
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("currentApp", "crm");
        },
        update : (user : {}) => {
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
        },
        logout: () => {
            setToken("");
            setUser({});
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("currentApp");
        },
    }), []);

    return (
        <GlobalActionsProvider contextName="AuthGlobalContext" actions={actions}>
            <DataProvider name="token" data={token}>
                <DataProvider name="user" data={user}>
                    {children}
                </DataProvider>
            </DataProvider>
        </GlobalActionsProvider>
    );
}