import '@/styles/globals.css'
import Layout from '@/components/Layout';
import DashboardProvider from './DashboardProvider';

export default function App({ Component, pageProps }) {
  return (
    <DashboardProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DashboardProvider>
  );
}
