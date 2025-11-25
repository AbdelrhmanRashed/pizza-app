import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

const Header = () => {
  return (
    <header className="h-screen border-b border-stone-500 bg-amber-500 px-4 py-3">
      <Link to="/" className="tracking-widest uppercase">
        Fast Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
