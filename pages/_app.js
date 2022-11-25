import '../styles/globals.css'
import '../styles/personalited.css'

import { MyThemeProvider } from '../store/store'

function MyApp({ Component, pageProps }) {
  return (
    <MyThemeProvider>
      <Component {...pageProps} />
    </MyThemeProvider>)
}

export default MyApp
