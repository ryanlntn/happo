import React from 'react';

export default function HappoDebug() {
  return (
    <div>
      <header className='HappoDebug__header'>
        <h1 className='HappoDebug__headerTitle'>
          Happo Debug Tool
        </h1>
      </header>

      <main className='HappoDebug__main'>
        <p>
          Click on an item to render that example in isolation.
        </p>
        <ul>
          {Object.keys(window.happo.defined).map((description) => (
            <li>
              <a href={`/snapshot?description=${encodeURIComponent(description)}`}>
                {description}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
