import { useAppSelector } from '../../hooks';

const Username = () => {
  const username = useAppSelector((state) => state.user.username);
  if (!username) return;

  return (
    <div className="hidden text-sm font-semibold sm:block">{username}</div>
  );
};

export default Username;
