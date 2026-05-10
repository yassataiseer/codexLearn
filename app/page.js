'use client';

import { useState } from 'react';

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <h1>Simple Counter</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        <button
          type="button"
          onClick={() => setCount((current) => current - 1)}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Decrease
        </button>
        <span style={{ fontSize: '1.25rem' }}>Count: {count}</span>
        <button
          type="button"
          onClick={() => setCount((current) => current + 1)}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Increase
        </button>
      </div>
      <p>Refresh the page and the counter resets to 0.</p>
    </main>
  );
}
