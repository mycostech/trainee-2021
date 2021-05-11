import { useCallback, useEffect, useRef, useState } from "react"
import enterThaiWin from '../../api/enterThaiWin'
import exitThaiWin from '../../api/exitThaiWin'

const useThaiWin = () => {
    const inputEl = useRef(false);

    const [isStay, setIsStay] = useState(false)

    useEffect(() => {
        return () => {
            exit()
        }
    },[])

    const enter = useCallback(() => {
        if (inputEl.current == false) {
            enterThaiWin()
            setIsStay(true)
            inputEl.current = true
        }
    }, [setIsStay])

    const exit = useCallback(() => {
        if (inputEl.current == true) {
            exitThaiWin()
            setIsStay(false)
            inputEl.current = false
        }
    }, [setIsStay])
    
    return [isStay, enter, exit] as const
}

export default useThaiWin