import {RecoilRoot} from 'recoil'
import {act, renderHook} from '@testing-library/react'
import {useDialog} from './useDialog'

describe('', () => {
  it('初期状態は Dialog は閉じている。', () => {
    const {result} = renderHook(() => useDialog(), {
      wrapper: RecoilRoot,
    })
    expect(result.current.isOpen).toBe(false)
  })

  it('open でダイアログが開状態になる', async () => {
    const {result} = renderHook(() => useDialog(), {
      wrapper: RecoilRoot,
    })
    await act(async () => {
      result.current.open()
    })
    expect(result.current.isOpen).toBe(true)
  })
  it('close でダイアログが開状態になる', async () => {
    const {result} = renderHook(() => useDialog(), {
      wrapper: RecoilRoot,
    })
    await act(async () => {
      await result.current.open()
    })
    await act(async () => {
      await result.current.close()
    })
    expect(result.current.isOpen).toBe(false)
  })
})
