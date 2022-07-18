import "../styles/globals.scss";

import { useEffect } from "react";

import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import axios from "../networkAPI/axios";
import { persistor, store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        refetchOnReconnect: true,
      },
    },
  });

  useEffect(() => {


    axios.interceptors.request.use((config: any) => {
      const token=localStorage.getItem("token")
      console.log("Token",token)
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  }, []);

  // console.log({store:store.getState()});

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;

// export default MyApp

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <DashboardLayout>
//       <Component {...pageProps} />
//     </DashboardLayout>
//   );
// }

// export default MyApp;
