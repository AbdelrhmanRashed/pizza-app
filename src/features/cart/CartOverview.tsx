import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="bg-stone-800 py-4 text-sm font-semibold text-stone-200 uppercase md:text-base">
      <div className="container flex items-center justify-between">
        <p className="space-x-4">
          <span>23 pizzas</span>
          <span>$23.45</span>
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
