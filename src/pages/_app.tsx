import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GeneralLayout } from '@components/layout/SiteLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return  (
    <GeneralLayout>
      <Component {...pageProps} />
    </GeneralLayout>
  )
}

export default MyApp
