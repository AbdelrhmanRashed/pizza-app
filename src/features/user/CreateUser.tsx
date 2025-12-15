import { useState, type FormEvent, type ChangeEvent } from 'react';
import Button from '../../ui/Button';
import { useAppDispatch } from '../../hooks';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
        className="form-input mb-8 w-72"
      />

      {username.trim() && (
        <div>
          <Button variant="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
