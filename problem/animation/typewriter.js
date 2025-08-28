import './styles.css';
import { useEffect, useState } from 'react';

async function fetchSecret() {
  const res = await fetch(
    'https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/616d69'
  );
  return res.text();
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState('');

  useEffect(() => {
    fetchSecret().then((res) => {
      let i = 0,
        display = '';
      const next = () => {
        setTimeout(() => {
          if (i < res.length) {
            display += res[i++];
            setWord(display);
            next();
          }
        }, 1000);
      };

      next();
      setLoading(false);
    });
  }, []);

  return (
    <div className='App'>
      {loading && 'Loading...'}
      <h1>Hello {word}</h1>
    </div>
  );
}
