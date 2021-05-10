import { act, renderHook } from '@testing-library/react-hooks'

import useThaiWin from './useThaiWin'

import enterThaiWinAPI from '../../api/enterThaiWin'
import exitThaiWinAPI from '../../api/exitThaiWin'

jest.mock('../../api/enterThaiWin')
jest.mock('../../api/exitThaiWin')

describe('useThaiWin', () => {
    it('fully return;', () => {
        const { result } = renderHook(useThaiWin)

        expect(result.current).toEqual([
            expect.any(Boolean),
            expect.any(Function),
            expect.any(Function),
        ])
    })

    it('when no enter but call exit, should not call Exit API', () => {
        const { result } = renderHook(useThaiWin)
        const mockEnterThaiWinAPI = enterThaiWinAPI
        const mockExitThaiWinAPI = exitThaiWinAPI

        act(() => {
            result.current[2]()
        })
        expect(mockEnterThaiWinAPI).toHaveBeenCalledTimes(0)
        expect(mockExitThaiWinAPI).toHaveBeenCalledTimes(0)
        expect(result.current[0]).toEqual(false)
    })

    it('when once entered then once exited, should working correctly', () => {
        const { result } = renderHook(useThaiWin)
        const mockEnterThaiWinAPI = enterThaiWinAPI
        const mockExitThaiWinAPI = exitThaiWinAPI

        act(() => {
            result.current[1]()
        })

        expect(mockEnterThaiWinAPI).toHaveBeenCalledTimes(1)
        expect(mockExitThaiWinAPI).toHaveBeenCalledTimes(0)
        expect(result.current[0]).toEqual(true)

        act(() => {
            result.current[2]()
        })

        expect(mockExitThaiWinAPI).toHaveBeenCalledTimes(1)
        expect(result.current[0]).toEqual(false)
    })

    it('when enter 3 times then exit 1 time, should working correctly with call only once Enter API then once Exit API', () => {
        const { result } = renderHook(useThaiWin)
        const mockEnterThaiWinAPI = enterThaiWinAPI
        const mockExitThaiWinAPI = exitThaiWinAPI

        act(() => {
            result.current[1]()
        })
        act(() => {
            result.current[1]()
        })
        act(() => {
            result.current[1]()
        })

        expect(mockEnterThaiWinAPI).toHaveBeenCalledTimes(1)
        expect(mockExitThaiWinAPI).toHaveBeenCalledTimes(0)
        expect(result.current[0]).toEqual(true)

        act(() => {
            result.current[2]()
        })

        expect(mockEnterThaiWinAPI).toHaveBeenCalledTimes(1)
        expect(mockExitThaiWinAPI).toHaveBeenCalledTimes(1)
        expect(result.current[0]).toEqual(false)
    })

    it('when enter once but forgot exit, should working correctly with call once Enter API then once Exit API', () => {
        const { result, unmount } = renderHook(useThaiWin)
        const mockEnterThaiWinAPI = enterThaiWinAPI
        const mockExitThaiWinAPI = exitThaiWinAPI

        act(() => {
            result.current[1]()
        })

        expect(mockEnterThaiWinAPI).toHaveBeenCalledTimes(1)
        expect(mockExitThaiWinAPI).toHaveBeenCalledTimes(0)
        expect(result.current[0]).toEqual(true)

        unmount()

        expect(mockEnterThaiWinAPI).toHaveBeenCalledTimes(1)
        expect(mockExitThaiWinAPI).toHaveBeenCalledTimes(1)
    })
})
