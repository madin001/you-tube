import { createContext , useEffect, useState } from "react";

let Context=createContext()

function ThemeProvider({children}){

    
    let [theme, setTheme]=useState(window.localStorage.getItem('theme')||'dark')
    
    useEffect(()=>{
        window.localStorage.setItem('theme', theme)
    }, [theme])
    return(
        <Context.Provider value={{theme, setTheme}}>{children}</Context.Provider>
    )

}

export { Context , ThemeProvider}