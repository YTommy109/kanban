import {createElement} from 'react'
import {RecoilRoot} from 'recoil'
import {RecoilLogger} from 'recoil-devtools-logger'
import {setup} from 'goober'
import {prefix} from 'goober/prefixer'
import type {AppProps} from 'next/app'
import 'reset-css'

// goober's needs to know how to render the `styled` nodes.
// So to let it know, we run the `setup` function with the
// `createElement` function and prefixer function.
setup(createElement, prefix)

export default function App({Component, pageProps}:AppProps) {
  return <RecoilRoot>
    <RecoilLogger />
    <Component {...pageProps} />
  </RecoilRoot>
}
