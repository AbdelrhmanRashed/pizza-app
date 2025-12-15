import CreateUser from '../features/user/CreateUser';
import { useAppSelector } from '../hooks';
import Button from './Button';

const Home = () => {
  const username = useAppSelector((state) => state.user.username);

  return (
    <div className="my-10 text-center sm:my-20">
      <h1 className="mb-4 text-center text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-amber-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!username ? (
        <CreateUser />
      ) : (
        <Button to="/menu" variant="primary">
          Continue Ordering, {username}
        </Button>
      )}
    </div>
  );
};

export default Home;
