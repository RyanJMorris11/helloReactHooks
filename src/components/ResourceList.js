import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>
      {resources.map((record) => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

// ** Equivolent class **
// class ResourceList extends React.Component {
//   state = { resources: [] };

//   async componentDidMount() {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/${this.props.resource}`
//     );
//     this.setState({ resources: response.data });
//   }

//   async componentDidUpdate(prevProps) {
//     if (prevProps.resource !== this.props.resource) {
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/${this.props.resource}`
//       );
//       this.setState({ resources: response.data });
//     }
//   }

//   render() {
//     return (
//       <div>
//         {this.state.resources.length} {this.props.resource}
//       </div>
//     );
//   }
// }

export default ResourceList;
