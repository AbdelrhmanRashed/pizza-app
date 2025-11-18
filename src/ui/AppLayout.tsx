import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <CartOverview></CartOverview>
    </div>
  );
};

export default AppLayout;
