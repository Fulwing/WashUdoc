import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default App