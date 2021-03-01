import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import '../styles/globals.scss'
import '../styles/header.scss'
import '../styles/footer.scss'
import '../styles/main.scss'
config.autoAddCss = false;


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
