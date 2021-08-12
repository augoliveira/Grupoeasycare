import Document, { Html, Head, Main, NextScript } from "next/document";
import { FB_PIXEL_ID } from '../lib/fpixel'
import { GA_TRACKING_ID as PROD_GA_TRACKING_ID } from "../lib/gtag";


    // Use dummy ga id if not in production. Not sure if this is best way but works for now.
    const GA_TRACKING_ID =
      process.env.NODE_ENV === "production"
        ? PROD_GA_TRACKING_ID
        : "G-0000000001";   
  
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="Pt-br">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${'UA-175989423-1'}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${'UA-175989423-1'}', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
          {/* Global Site Code Pixel - Facebook Pixel */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', ${FB_PIXEL_ID});
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>Grupo Easy care | ambientes planejados</title>
          <meta name="keywords" content="móveis planejados para todos os estados fins. Móveis Para Sala. Móveis Para Banheiro.
           Móveis Para Cozinha. Móveis Para Quarto. Planejados De Qualidade. Modelos: Cozinha Planejada, Sala Planejada, Quarto Planejado, Banheiro Planejado." />
          <meta name="description" content="móveis planejados para todos os estados do Brasil. Móveis Para Sala. Móveis Para Banheiro. Móveis Para Cozinha. Móveis Para Quarto. Planejados De Qualidade. Modelos:
           Cozinha Planejada, Sala Planejada, Quarto Planejado, Banheiro Planejado." />
          <meta name="author" content="Augusto desenvolvedor" />

          <link
            rel="shortcut icon"
            href="images/favicon.png"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="/images/icon.ico" />
          
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/style.scss" />
          <link rel="stylesheet" href="/css/responsive.css" />
          <link rel="stylesheet" href="/css/custom.css" />
          <link href="assets/vendor/aos/aos.css" rel="stylesheet"/>
          <link href="assets/css/style.css" rel="stylesheet"/>
          <link rel="stylesheet" type="text/css" href="/css/font.css"/>

	        <link rel="stylesheet" href="/css/magnific-popup.css"/>
	        <link rel="stylesheet" href="/css/slicknav.min.css"/>
	        <link rel="stylesheet" href="/css/owl.carousel.min.css"/>
          <link href="style.css" rel="stylesheet"/>
          

      
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/jquery-3.2.1.min.js"></script>
          <script src="/js/popper.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/jquery.superslides.min.js"></script>
          <script src="/js/bootstrap-select.js"></script>
          <script src="/js/inewsticker.js"></script>
          
          <script src="/js/images-loded.min.js"></script>
          <script src="/js/isotope.min.js"></script>
          <script src="/js/owl.carousel.min.js"></script>
          <script src="/js/baguetteBox.min.js"></script>
          <script src="/js/form-validator.min.js"></script>
          <script src="/js/contact-form-script.js"></script>
          <script src="/js/custom.js"></script>

          
  <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js">
</script>
<script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js">
</script>
        <script src="assets/vendor/php-email-form/validate.js"></script>
        <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
        <script src="assets/vendor/counterup/counterup.min.js"></script>
        <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="assets/vendor/venobox/venobox.min.js"></script>
        <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
        <script src="assets/vendor/aos/aos.js"></script>
        <script src="assets/js/main.js"></script>

        <script src="vendor/jquery-3.2.1.min.js" type="text/javascript"></script>
  <script src="vendor/wow/wow.min.js" type="text/javascript"></script>
  <script src="vendor/lightbox2/src/js/lightbox.js" type="text/javascript"></script>
  <script src="vendor/bootstrap4/popper.min.js" type="text/javascript"></script>
  <script src="vendor/bootstrap4/bootstrap.min.js" type="text/javascript"></script>
  <script src="vendor/owl-carousel/owl.carousel.min.js" type="text/javascript"></script>
  <script src="vendor/revolution/jquery.themepunch.revolution.min.js" type="text/javascript"></script>
  <script src="vendor/revolution/jquery.themepunch.tools.min.js" type="text/javascript"></script>
  
  <script type="text/javascript" src="vendor/revolution/local/revolution.extension.migration.min.js"></script>
  <script type="text/javascript" src="vendor/revolution/local/revolution.extension.actions.min.js"></script>
  <script type="text/javascript" src="vendor/revolution/local/revolution.extension.carousel.min.js"></script>
  <script type="text/javascript" src="vendor/revolution/local/revolution.extension.kenburn.min.js"></script>
  <script type="text/javascript" src="vendor/revolution/local/revolution.extension.layeranimation.min.js"></script>
  <script type="text/javascript" src="vendor/revolution/local/revolution.extension.navigation.min.js"></script>
  <script type="text/javascript" src="vendor/revolution/local/revolution.extension.parallax.min.js"></script>
  <script type="text/javascript" src="vendor/revolution/local/revolution.extension.slideanims.min.js"></script>
  <script type="text/javascript" src="vendor/revolution/local/revolution.extension.video.min.js"></script>
  <script type="text/javascript"></script>
  
        </body>
      </Html>
    );
  }
}

export default MyDocument;
