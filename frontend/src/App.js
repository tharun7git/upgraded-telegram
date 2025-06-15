import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://4.224.145.208:5000/api/data')
      .then(response => setData(response.data.message))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>React + Flask App</h1>
      <p>{data}</p>
      <p>the chnaged are reflected</p>
    </div>
  );
}

export default App;
