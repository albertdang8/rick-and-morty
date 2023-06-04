import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
    //not global state in this file
    const [darkMode, setDarkMode] = useState(false);

    useEffect(()=>{
        //for something i have no idea yet...

    },[]);

    useEffect(()=> {
        // for localStorage state storage

    },[darkMode])

    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {props.children}
        </ThemeContext.Provider>
    )
}