import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Spinner from './spinner';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div>
      {/* {isLoading && <Spinner />} */}
      {true && <Spinner />}

      <Header></Header>

      <Outlet></Outlet>

      <CartOverview></CartOverview>
    </div>
  );
};

export default AppLayout;
