import { useAppSelector } from '../../hooks';
import { formatCurrency } from '../../utils/helpers';
import { getCurrentQuantityById } from './cartSlice';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './updateItemQuantity';

interface CartItemProps {
  item: {
    pizzaId: number;
    name: string;
    quantity: number;
    totalPrice: number;
  };
}

const CartItem = ({ item }: CartItemProps) => {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useAppSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="sm:mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-7">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
};

export default CartItem;
