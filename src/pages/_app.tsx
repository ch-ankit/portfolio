import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "./components/ProfileCard/ProfileCard.css"


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
