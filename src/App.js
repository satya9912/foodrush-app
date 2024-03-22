
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import './index.css';
import { createBrowserRouter, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Instamart from "./components/Instamart";
import Cart from "./components/Cart";
import Login from "./components/Login";

function App() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  );
}

const routes = [
  {
    path: '/', 
    element: <App />,
    errorElement: <Error />,// App is the root element
    children: [
      { path: '/', element: <Body /> }, // Default route
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/instamart', element: <Instamart /> },
      {path: '/restaurant/:resId', element: <RestaurantMenu />},
      {path: '/cart' , element: <Cart />},
    ],
  },
  {path: '/login', element: <Login />}
]
// export const appRouter = createBrowserRouter(routes);
export const router = createBrowserRouter(routes)

export default App;
