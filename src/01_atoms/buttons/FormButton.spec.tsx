import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormButton } from './FormButton'

describe('FormButton について', () => {
  const setup = (isPrimary=false) => {
    render(<FormButton isPrimary={isPrimary} fn={mockFn} label="HOGE" />)
  }
  const mockFn = jest.fn()

  beforeEach(() => {
    mockFn.mockClear()
  })

  it('クリック時に渡した関数が呼ばれる', async () => {
    setup()
    await userEvent.click(screen.getByText('HOGE'))
    expect(mockFn).toBeCalledTimes(1)
  })

  it('primary クリック時に渡した関数が呼ばれる', async () => {
    setup(true)
    await userEvent.click(screen.getByText('HOGE'))
    expect(mockFn).toBeCalledTimes(1)
  })
})
