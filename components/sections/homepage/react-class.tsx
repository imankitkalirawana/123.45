'use client';
import { useEffect, useState } from 'react';

export default function ReactClass() {
  return (
    <>
      <ToggleList />
    </>
  );
}

function ToggleList() {
  const [showList, setShowList] = useState(true);

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  const handleToggle = () => setShowList(!showList);
  useEffect(() => {
    console.log('Component re-rendered');
  }, [showList]);

  return (
    <div className="mt-24">
      <button onClick={handleToggle} className="px-12 py-4 text-lg">
        {showList ? 'HIDE' : 'SHOW'}
      </button>
      {showList && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// create a functional component that logs a message to console every time the component is re-rendered using the useEffect hook. Ensure that the effect only runs whena specific prop or state avalues is changes
