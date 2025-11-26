import { useState, FormEvent, ChangeEvent } from 'react';

function CreateUser() {
  const [username, setUsername] = useState<string>('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
        className="w-72 rounded-full bg-white px-3 py-2 outline-none placeholder:text-stone-500"
      />

      {username.trim() && (
        <div>
          <button>Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
