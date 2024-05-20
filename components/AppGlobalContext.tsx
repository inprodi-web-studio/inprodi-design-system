import React, { useEffect, useMemo, useState } from "react";
import { DataProvider, GlobalActionsProvider } from "@plasmicapp/host";

export const AppGlobalContext = ({ children }: React.PropsWithChildren) => {
    const [app, setApp] = useState("crm");

    useEffect(() => {
        const storedApp = localStorage.getItem("currentApp");

        if (storedApp) {
          setApp(storedApp);
        } else {
          setApp("crm");
        }
    }, []);

    const actions = useMemo(() => ({
        setApp: (app : "crm" | "stock" | "purchase") => {
            setApp(app);
            localStorage.setItem("currentApp", app);
        },
    }), []);

    return (
        <GlobalActionsProvider contextName="AppGlobalContext" actions={actions}>
            <DataProvider name="currentApp" data={app}>
                    {children}
            </DataProvider>
        </GlobalActionsProvider>
    );
}