import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "./spinner";

const AppLayout = () => {
  const navigation = useNavigation().state;
  const isLoading = navigation === "loading";

  return (
    <div>
      {isLoading && <Spinner />}

      <Header></Header>

      <Outlet></Outlet>

      <CartOverview></CartOverview>
    </div>
  );
};

export default AppLayout;
