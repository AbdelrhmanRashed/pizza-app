import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity = useAppSelector(getTotalCartQuantity);
  const totalCartPrice = useAppSelector(getTotalCartPrice);

  if (!totalCartQuantity) return;

  return (
    <div className="bg-stone-800 py-4 text-sm font-semibold text-stone-200 uppercase md:text-base">
      <div className="container flex items-center justify-between">
        <p className="space-x-4">
          <span>{totalCartQuantity} pizzas</span>
          <span>{formatCurrency(totalCartPrice)}</span>
        </p>
        <Link
          to="cart"
          className="group inline-flex items-center gap-1 transition-all hover:text-yellow-500"
        >
          Open cart{' '}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
