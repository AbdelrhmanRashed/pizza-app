import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Menu from "./features/menu/Menu";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import { createOrderAction, menuLoader, orderLoader } from "./services/loader";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
