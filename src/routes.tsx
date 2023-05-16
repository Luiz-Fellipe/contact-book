import { createBrowserRouter } from 'react-router-dom';

//LAYOUTS
import { DefaultLayout } from '_layouts/DefaultLayout';

// PAGES
import ContactBook from 'pages/ContactBook';
import { ContactDetail } from 'pages/ContactDetail';
import { GoogleContacts } from 'pages/GoogleContacts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <ContactBook />,
      },
      {
        path: 'contact/:contactId',
        element: <ContactDetail />,
      },
      {
        path: 'contacts/google',
        element: <GoogleContacts />,
      },
    ],
  },
]);

export default router;
