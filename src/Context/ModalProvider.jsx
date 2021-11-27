import { createContext, useState } from "react"

let Context = createContext()

function Provider({children}){

    let [open, setOpen] = useState(true)

    return(
        <Context.Provider value={{open, setOpen}}>{children}</Context.Provider>
    )
}

export { Context, Provider }