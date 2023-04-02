import { RecoilRoot } from 'recoil'
import { act, renderHook } from '@testing-library/react'
import { useBacklog } from './useBacklog'

describe('', () => {
  it('初期状態は null である', () => {
    const { result } = renderHook(() => useBacklog(), {
      wrapper: RecoilRoot,
    })
    expect(result.current.pgs).toHaveLength(0)
    expect(result.current.sgs).toHaveLength(0)
    expect(result.current.pbl).toHaveLength(0)
    expect(result.current.sbl).toHaveLength(0)
  })
  it('SBI を追加できる', async () => {
    const { result } = renderHook(() => useBacklog(), {
      wrapper: RecoilRoot,
    })
    await act(async () => {
      result.current.addBacklogItem('SBI')
    })
    expect(result.current.sbl).toHaveLength(1)
  })
  it('一件のアイテムを更新できる', async () => {
    const { result } = renderHook(() => useBacklog(), {
      wrapper: RecoilRoot,
    })
    await act(async () => {
      result.current.addBacklogItem('SBI')
    })
    await act(async () => {
      result.current.updateBacklogItem({...result.current.sbl[0],
        title: 'TTEESSTT', state: 'Done'})
    })
    expect(result.current.sbl[0]).toMatchObject({
      title: 'TTEESSTT',
      state: 'Done'
    })
  })
})
