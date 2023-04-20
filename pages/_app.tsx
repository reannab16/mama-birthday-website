import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Parallax, ParallaxLayer} from '@react-spring/parallax'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
