import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../layout/Root";
import EventDetails from "../pages/Home/EventDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import PastEvents from "../pages/PastEvents";
import OurSpeakers from "../pages/OurSpeakers/OurSpeakers";

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
        element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
        loader: ()=> fetch('../../public/educational_training_events_data.json')
      },
      {
        path: "/pastevents",
        element: <PrivateRoute><PastEvents></PastEvents></PrivateRoute>,
        loader: ()=> fetch('../../public/past_events_data.json')
      },
      {
        path: "/ourspeakers",
        element: <PrivateRoute><OurSpeakers></OurSpeakers></PrivateRoute>,
        loader: ()=> fetch('../../public/our_speakers_data.json')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;