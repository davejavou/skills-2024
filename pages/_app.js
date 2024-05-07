import "@/styles/globals.css";
import '@/styles/slick.1.6.0.min.css'
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
