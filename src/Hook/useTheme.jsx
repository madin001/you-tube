import { useContext } from "react"
import { Context } from "../Context/ThemeProvider"
  
function useTheme() {
    let { theme, setTheme } = useContext(Context)

    return [theme, setTheme]
}

export default useTheme