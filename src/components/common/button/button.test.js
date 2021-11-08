/* eslint-disable */
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '.'

describe('Test Button Component', () => {
  it('Render label correctly', () => {
    const label = 'button'
    const { getByText } = render(<Button label={label} />)
    const button = getByText(label)
    expect(button).toBeInTheDocument()
  })
})
