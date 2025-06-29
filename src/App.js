import { useState, useEffect } from 'react';
function App() {

  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(data => setItems(data));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick= {() => setResourceType('posts')}>Posts</button>
        <button onClick= {() => setResourceType('users')}>Users</button>
        <button onClick= {() => setResourceType('comments')}>Comments</button>
      </div> 
      <h1>{resourceType}</h1>
      {
        items.map(item => (
          <pre key={item.id}>{JSON.stringify(item, null, 2)}</pre>
        ))
      }
   </>
  );
}

export default App;
