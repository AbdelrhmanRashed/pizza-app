import { useAppDispatch } from '../../hooks';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

type DeleteItemProps = {
  pizzaId: number;
};
const DeleteItem = ({ pizzaId }: DeleteItemProps) => {
  const dispatch = useAppDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <Button variant="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
};

export default DeleteItem;
