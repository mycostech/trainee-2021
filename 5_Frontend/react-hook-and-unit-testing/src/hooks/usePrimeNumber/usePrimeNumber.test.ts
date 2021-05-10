import { act, renderHook } from '@testing-library/react-hooks'
import usePrimeNumber from './usePrimeNumber'

describe('usePrimeNumber', () => {
    it('fully return;', () => {
        const { result } = renderHook(usePrimeNumber)

        expect(result.current).toEqual([
            expect.any(Boolean),
            expect.any(Function),
            expect.any(Number),
        ])
    })

    describe('should check is Prime number correctly', () => {
        let result: any
        beforeEach(() => {
            result = renderHook(usePrimeNumber).result
        })

        test('2 is Prime', () => {
            act(() => {
                result.current[1](2)
            })
            expect(result.current[0]).toEqual(true)
            expect(result.current[2]).toEqual(2)
        })


        test('13 is Prime', () => {
            act(() => {
                result.current[1](13)
            })
            expect(result.current[0]).toEqual(true)
            expect(result.current[2]).toEqual(13)
        })


        test('0 not Prime', () => {
            act(() => {
                result.current[1](0)
            })
            expect(result.current[0]).toEqual(false)
            expect(result.current[2]).toEqual(0)
        })


        test('99 not Prime', () => {
            act(() => {
                result.current[1](99)
            })
            expect(result.current[0]).toEqual(false)
            expect(result.current[2]).toEqual(99)
        })


        test('103 is Prime', () => {
            act(() => {
                result.current[1](103)
            })
            expect(result.current[0]).toEqual(true)
            expect(result.current[2]).toEqual(103)
        })


        test('27 not Prime', () => {
            act(() => {
                result.current[1](27)
            })
            expect(result.current[0]).toEqual(false)
            expect(result.current[2]).toEqual(27)
        })


        test('29 is Prime', () => {
            act(() => {
                result.current[1](29)
            })
            expect(result.current[0]).toEqual(true)
            expect(result.current[2]).toEqual(29)
        })

    })
})
