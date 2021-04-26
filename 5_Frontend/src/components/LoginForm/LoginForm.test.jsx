import LoginForm from './LoginForm'
import { act, fireEvent, render } from '@testing-library/react'

describe('Login Form', () => {
    it('render correctly', () => {
        const mockSubmit = jest.fn()

        const { getByText } = render(<LoginForm mockSubmit={mockSubmit} />)
        expect(getByText('Login Form')).toBeTruthy()
        expect(mockSubmit).toHaveBeenCalledTimes(0)
    })

    it('when submit email the right format, should submit with that email', () => {
        const mockSubmit = jest.fn()

        const { getByLabelText, getByText } = render(
            <LoginForm handleSubmit={mockSubmit} />
        )

        act(() => {
            fireEvent.change(getByLabelText('EMAIL'), {
                target: { value: 'nook@gmail.com' },
            })
        })

        act(() => {
            fireEvent.submit(getByText('Submit'))
        })

        expect(mockSubmit).toHaveBeenCalledWith('nook@gmail.com')
    })
})
