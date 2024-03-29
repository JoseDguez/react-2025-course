import { AuthProvider } from '@/lib/auth';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import theme from '@/styles/theme';

const GlobalStyle = ({children}) => {
  return (
    <>
      <CSSReset />
      <Global
          styles={css`
            html {
              min-width: 360px;
              scroll-behavior: smoth;
            }
            
            #__next {
              display: flex;
              flex-direction: column;
              min-height: 100vh;
            }`
          }
        />
        {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
