import '@/styles/Home.module.css'
import { persistor, Store } from "@/redux/Store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Spinner } from "react-bootstrap";
import { PersistGate } from "redux-persist/integration/react";

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <Provider store={Store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={Store}>
            <PersistGate persistor={persistor} loading={<Spinner/>}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
}
