import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeProvider } from './styles/ThemeProvider';
//import './index.css';
import Root from './routes/root';
import ErrorPage from './error-page';
import ComponentTest from './components/ComponentTest';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'component-test',
        element: <ComponentTest />,
      },
    ],
  },
]);

const client = new ApolloClient({
  uri: 'https://hiroko-web-backend-new-08d39ee2590b.herokuapp.com/',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </ReduxProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
