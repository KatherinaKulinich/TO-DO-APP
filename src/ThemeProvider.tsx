import { createContext, useState } from "react";
import { Theme } from "./types";



export type ThemeContext = { 
    theme: Theme; 
    toggleTheme: () => void;
}

export interface ThemeProviderProps {
    children: React.ReactNode
}


export const ThemeContext = createContext<ThemeContext>(
    {} as ThemeContext
);



export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("dark");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};