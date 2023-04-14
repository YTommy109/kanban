import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {AddButton} from './add'

describe('AddButton について', () => {
  const setup = (disabled=false) => {
    render(<AddButton disabled={disabled} handleClick={mockFn} tips="HOGE" />)
  }
  const mockFn = jest.fn()

  beforeEach(() => {
    mockFn.mockClear()
  })

  it('クリック時に渡した関数が呼ばれる', async () => {
    setup()
    await userEvent.click(screen.getByTestId('add_button'))
    expect(mockFn).toBeCalledTimes(1)
  })

  it('disabled クリック時は渡した関数が呼ばれない', async () => {
    setup(true)
    await userEvent.click(screen.getByTestId('add_button'))
    expect(mockFn).toBeCalledTimes(0)
  })
})
