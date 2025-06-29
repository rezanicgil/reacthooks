import { useState, useEffect } from 'react';
function App() {

  const [resourceType, setResourceType] = useState('posts');
  useEffect(() => {
    console.log('useEffect called');

    return () => {
      console.log('Cleanup function called');
    }
  }, [resourceType]);


  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default App;
