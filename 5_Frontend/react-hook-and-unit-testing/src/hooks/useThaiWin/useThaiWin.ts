import { useCallback, useEffect, useRef, useState } from "react"
import enterThaiWin from '../../api/enterThaiWin'
import exitThaiWin from '../../api/exitThaiWin'

const useThaiWin = () => {

    return [false, () => {}, ()=> {}] as const
}

export default useThaiWin