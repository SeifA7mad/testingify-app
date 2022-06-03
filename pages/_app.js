import TestingResultsContextProvider from '../context/TestingResultsContext';

import Layout from '../components/layout/Layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <TestingResultsContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TestingResultsContextProvider>
  );
}

export default MyApp;
