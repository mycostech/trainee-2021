import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import MyLED from './MyLED'

describe('MyLED', () => {
    it('render correctly', () => {
        const testText = 'My Computer'
        const tree = renderer.create(<MyLED text={testText} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('when danger, render correctly with word Danger!', () => {
        const testText = 'My Computer'
        const { getByText, queryByText } = render(
            <MyLED text={testText} isDanger={true} />
        )
        expect(getByText('Danger!', { exact: false })).toBeTruthy()
        expect(queryByText('Success!', { exact: false })).toBeNull()
        expect(queryByText(testText, { exact: false })).toBeTruthy()
    })
})
