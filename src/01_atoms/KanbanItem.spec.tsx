import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { KanbanItem } from './KanbanItem'

describe('KanbanItem', () => {
  const mockItem:BacklogItem = { id: '1', title: 'test item', dod: [], state: 'ToDo', order: 1, created_at: '' }
  const mockHandleClick = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders item title correctly', () => {
    render(<KanbanItem item={mockItem} />)
    expect(screen.getByText('test item')).toBeInTheDocument()
  })

  it('calls handleClick function when item is clicked', () => {
    render(<KanbanItem item={mockItem} handleClick={mockHandleClick} />)
    fireEvent.click(screen.getByText('test item'))
    expect(mockHandleClick).toHaveBeenCalledTimes(1)
  })

  it('has correct styles', () => {
    render(<KanbanItem item={mockItem} />)
    const listItem = screen.getByText('test item')
    expect(listItem).toHaveStyle(`
      color: black;
      padding: 0.5rem;
      background-color: lightgoldenrodyellow;
    `)
  })
})