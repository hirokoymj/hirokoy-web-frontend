import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { store } from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeProvider } from './styles/ThemeProvider';
import { router } from 'routes/router';
import { AuthProvider } from 'contexts/authContext';

const client = new ApolloClient({
  uri: 'https://hiroko-web-backend-new-08d39ee2590b.herokuapp.com/',
  cache: new InMemoryCache(),
});

// const user: User = {
//   isSubscribed: true,
//   name: 'You',
// };

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <AuthProvider>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </AuthProvider>
      </ReduxProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
