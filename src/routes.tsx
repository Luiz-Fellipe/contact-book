import {
  createBrowserRouter
} from "react-router-dom";

// PAGES
import PhoneBook from "./pages/PhoneBook";
import { ContactDetail } from "./pages/ContactDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PhoneBook />,
  },
  {
    path: "contact/:contactId",
    element: <ContactDetail />,
  },
]);


export default router;