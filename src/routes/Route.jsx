import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../layout/Root";
import EventDetails from "../pages/Home/EventDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('../../public/educational_training_events_data.json')
      },
      {
        path: "/eventdetails/:id",
        element: <EventDetails></EventDetails>,
        loader: ()=> fetch('../../public/educational_training_events_data.json')
      },
    ],
  },
]);

export default router;