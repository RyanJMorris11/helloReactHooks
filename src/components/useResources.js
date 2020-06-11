import { useState, useEffect } from 'react'; // hooks
import axios from 'axios';

const useResources = (resource) => {
  const [resources, setResurces] = useState([]);

  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResurces(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;
