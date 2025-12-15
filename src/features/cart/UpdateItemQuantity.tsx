import { useAppDispatch } from '../../hooks';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

type UpdateItemQuantityProp = {
  pizzaId: number;
  currentQuantity: number;
};

const UpdateItemQuantity = ({
  pizzaId,
  currentQuantity,
}: UpdateItemQuantityProp) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        variant="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-semibold">{currentQuantity}</span>
      <Button
        variant="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
