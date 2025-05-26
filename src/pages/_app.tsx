import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem={true}
      value={{
        light: 'light',
        dark: 'dark',
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
