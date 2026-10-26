import React, { useEffect, useState } from 'react';

function App() {
  const [info, setInfo] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/info')
      .then((res) => res.json())
      .then((data) => setInfo(data.info))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div>
      <h1>React + Node.js Lab</h1>
      <p>Message from backend: {info}</p>
    </div>
  );
}

export default App;