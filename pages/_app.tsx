
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout/Layout";
import "swiper/swiper-bundle.min.css";

function MyApp({ Component, pageProps }) {

  return (


      <Layout>
        <Component {...pageProps} />
      </Layout>


  );
}

export default MyApp;