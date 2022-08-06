import "../styles/globals.css";
import Header from "../components/Header";
import { ContextProvider } from "../context/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Header />
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
