import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Spinner from './spinner';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Spinner />}

      <Header></Header>

      <div className="overflow-y-auto">
        <div className="container">
          <Outlet></Outlet>
        </div>
      </div>

      <CartOverview></CartOverview>
    </div>
  );
};

export default AppLayout;
