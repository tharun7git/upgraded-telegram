import React, { useEffect, useState } from 'react';

function ChangeLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch('http://4.224.145.208:5000/api/change-logs')
      .then(response => response.json())
      .then(data => setLogs(data));
  }, []);

  return (
    <div>
      <h2>Code Change Logs</h2>
      <ul>
        {logs.map((log, idx) => (
          <li key={idx}>{log}</li>
        ))}
      </ul>
    </div>
  );
}

export default ChangeLogs;
