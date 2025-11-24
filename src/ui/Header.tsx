import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

const Header = () => {
  return (
    <header className="bg-amber-500">
      <Link to="/" className="tracking-widest uppercase">
        Fast Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
