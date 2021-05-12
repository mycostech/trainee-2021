import { statSync } from "fs"
import { useCallback, useEffect, useRef, useState } from "react"
import { isSpreadAssignment } from "typescript"
import enterThaiWin from '../../api/enterThaiWin'
import exitThaiWin from '../../api/exitThaiWin'

const useThaiWin = () => {
    const inputEl = useRef(true);
    const [isStay,setIsStay] = useState(false)
    const enter = () => {
        if(!isStay){
            enterThaiWin()
            setIsStay(true)
        }
    }

    useEffect(() => {
        return () => {
            inputEl.current = false
            exit()
        }
    },[])

    const exit = () => {
        if(isStay || !inputEl.current){
            exitThaiWin()
            setIsStay(false)
        }
    }

    return [isStay, enter, exit] as const
}

export default useThaiWin