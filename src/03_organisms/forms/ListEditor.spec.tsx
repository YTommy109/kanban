import { render, screen } from '@testing-library/react'
import { ListEditor } from './ListEditor'

describe('ListEditor について', () => {
  const mockFn = jest.fn()
  const setup = () => {
    render(<ListEditor title="TITLE" dod={['', '']} handleChangeList={mockFn} />)
  }

  beforeEach(() => {
    mockFn.mockClear()
  })

  it('', async () => {
    setup()
    expect(screen.getByText('TITLE')).toBeInTheDocument()
  })

})
