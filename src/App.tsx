import { useState, type JSX } from "react";

function App(): JSX.Element {
  const [id, setID] = useState<number>(0);

  return <div>Hello vite!</div>;
}

export default App;
