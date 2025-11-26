import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchOrder = () => {
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    // Navigate to order page
    navigate(`/order/${query}`);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search order #"
        className="w-44 rounded-full bg-amber-100 px-4 py-2 text-sm transition-all duration-300 outline-none placeholder:text-stone-400 focus:ring-2 focus:ring-amber-500 focus:ring-offset-0 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
};

export default SearchOrder;
