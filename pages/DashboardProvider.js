import { createContext, useContext, useState } from "react";

export const DashboardContext = createContext();
export const useDashboard = () => useContext(DashboardContext);

const DashboardProvider = ({children}) => {
    const [theme, setTheme] = useState(false);

    return (
        <DashboardContext.Provider value = {{theme, setTheme}}>
            {children}
        </DashboardContext.Provider>
    )
}
export default DashboardProvider;