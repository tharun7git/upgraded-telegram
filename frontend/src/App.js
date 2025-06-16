import React, { useEffect, useState } from 'react';

function App() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://4.224.145.208:5000/api/change-logs')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setLogs(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.toString());
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>Code Change Logs</h2>
      {loading && <p>Loading logs...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {logs.map((log, idx) => (
          <li key={idx} style={{ marginBottom: 10 }}>{log}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
