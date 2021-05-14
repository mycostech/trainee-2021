

import { renderHook } from "@testing-library/react-hooks"
import useCalMulti from "./useCalMulti"


describe('use Call Multi', () => {
    
    it('test', () => {
        const { result } = renderHook(useCalMulti)


        //console.log("result result: ", result.current(4,4))
    })
})