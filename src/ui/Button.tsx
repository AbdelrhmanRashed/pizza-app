import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
  variant: 'primary' | 'secondary' | 'small';
};

const base: string =
  'inline-block cursor-pointer rounded-full bg-amber-400 font-semibold tracking-wide uppercase transition-colors duration-300 outline-none hover:bg-amber-300 focus:bg-amber-300 focus:ring-2 focus:ring-amber-300 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-75 disabled:hover:bg-amber-400 ';

const styles = {
  primary: base + 'px-4 py-3 md:px-6 md:py-4',
  small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-sm',
  secondary:
    'inline-block cursor-pointer rounded-full bg-transparent font-semibold tracking-wide uppercase transition-colors duration-300 outline-none hover:bg-stone-300 focus:bg-stone-300 focus:ring-2 focus:ring-stone-300 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-75 disabled:hover:bg-stone-400  border border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5',
};

const Button = ({ children, disabled, to, variant }: ButtonProps) => {
  if (to)
    return (
      <Link className={styles[variant]} to={to}>
        {children}
      </Link>
    );

  return (
    <button className={styles[variant]} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
