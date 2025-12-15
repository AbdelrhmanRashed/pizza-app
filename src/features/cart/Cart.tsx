import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const username = useAppSelector((state) => state.user.username);
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    console.log('Successfully Cleared!');
  };

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="container mt-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="my-3 divide-y divide-stone-200 border-b border-stone-200">
        {cart.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.pizzaId} />
        ))}
      </ul>
      <div className="mt-3 space-x-2">
        <Button variant="primary" to="/order/new">
          Order pizzas
        </Button>

        <Button variant="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
