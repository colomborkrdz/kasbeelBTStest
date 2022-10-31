import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { AppWrapper, Header } from './../components'

function NetLabel({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Header />
      <main className="px-6 py-20 flex flex-col items-center">
        <Component {...pageProps} />
      </main>
    </AppWrapper>
  )
}

export default NetLabel
