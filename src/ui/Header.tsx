import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

const Header = () => {
  return (
    <header className="border-b border-stone-500 bg-amber-400 py-3">
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-sm tracking-widest uppercase sm:text-base">
          🍕Fast Pizza Co.
        </Link>
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
};

export default Header;
