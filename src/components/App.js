import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './userList';

// useState
// useEffect
// useContext
// useRef

const App = () => {
  console.log(useState('posts'));
  const [resource, set] = useState('posts'); // array destructuring - hook
  // const [counter, mySetFunction] = useState(0); // e.g. array destructuring - hook

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => set('posts')}>Posts</button>
        <button onClick={() => set('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
