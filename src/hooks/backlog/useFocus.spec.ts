import { RecoilRoot } from 'recoil'
import { act, renderHook } from '@testing-library/react'
import { useFocus } from './useFocus'

describe('', () => {
  it('初期状態は null である', () => {
    const {result} = renderHook(() => useFocus(), {
      wrapper: RecoilRoot,
    })
    expect(result.current.focusLane).toBeNull()
    expect(result.current.focusItemId).toEqual({
      'PGI':null,
      'SGI':null,
      'PBI':null,
      'SBI':null
    })
  })

  it('PGI 変更後はフォーカスが変わる', async () => {
    const {result} = renderHook(() => useFocus(), {
      wrapper: RecoilRoot,
    })
    await act(async () => {
      result.current.changeFocusItem('1', 'PGI')
    })
    expect(result.current.focusLane).toBe('PGI')
    expect(result.current.focusItemId).toEqual({
      'PGI':'1',
      'SGI':null,
      'PBI':null,
      'SBI':null
    })
  })
})
