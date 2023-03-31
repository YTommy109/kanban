import { RecoilRoot } from 'recoil'
import { act, renderHook } from '@testing-library/react'
import { useBacklog } from './useBacklog'

describe('', () => {
  it('初期状態は null である', () => {
    const { result } = renderHook(() => useBacklog(), {
      wrapper: RecoilRoot,
    })
    expect(result.current.pgs).toHaveLength(2)
    expect(result.current.sgs).toHaveLength(5)
    expect(result.current.pbl).toHaveLength(4)
    expect(result.current.sbl).toHaveLength(5)
  })
  it('SBI を追加できる', async () => {
    const { result } = renderHook(() => useBacklog(), {
      wrapper: RecoilRoot,
    })
    await act(async () => {
      result.current.addBacklogItem('SBI')
    })
    expect(result.current.sbl).toHaveLength(6)
  })
  it.todo('一件のアイテムを更新できる')
})
