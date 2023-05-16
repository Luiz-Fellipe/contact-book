import { store } from 'redux/store';
import { ToastContainer } from 'react-toastify';

//PROVIDERS
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// SERVICES
import { queryClient } from 'services/queryClient';

//ROUTES
import router from './routes';

//STYLES
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <RouterProvider router={router} />
          </GoogleOAuthProvider>
          <ToastContainer />
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
