import React, { useState } from 'react';
import Info from './Info';
function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <h1>React Hooks Tutorial😎</h1>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
}

export default App;
