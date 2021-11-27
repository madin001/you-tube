import { useContext } from "react"
import { Context } from "../Context/ModalProvider"


function useModal() {
    let { open, setOpen } = useContext(Context)

    return [open, setOpen]
}

export default useModal