import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import Store from "./utils/store";
import Watch from "./components/Watch";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import Aside from "./components/Aside";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <VideoContainer/>,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={Store}>
      <>
        <Header />
        <Aside/>
        <Outlet />
        <Footer />
        
      </>
    </Provider>
  );
}

export default appRoute;
