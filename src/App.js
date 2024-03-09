import { useState } from 'react';

function App() {
  const [state, setState] = useState(0);

  const increament = () => setState(prev => prev +1);

  return (
    <div className="App">
      <header className="App-header">
          <h1>Value = {state}</h1>
        <button onClick={increament}>increament</button>
      </header>
    </div>
  );
}

export default App;
