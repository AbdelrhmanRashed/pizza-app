import type { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type LinkButtonProp = {
  children: ReactNode;
  to: string | '-1';
};

const styles =
  'text-sm text-blue-500 hover:text-blue-600 hover:underline cursor-pointer';

const LinkButton = ({ children, to }: LinkButtonProp) => {
  const navigate = useNavigate();

  if (to === '-1')
    return (
      <button className={styles} onClick={() => navigate(-1)} type="button">
        {children}
      </button>
    );

  return (
    <Link className={styles} to={to}>
      {children}
    </Link>
  );
};

export default LinkButton;
