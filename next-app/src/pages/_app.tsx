import type { AppProps } from 'next/app'
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';

import '../styles/globals.css'


export default function MyApp({ Component, pageProps }: AppProps) {


  return (
    <Component {...pageProps} />
)
}
