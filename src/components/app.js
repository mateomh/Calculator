/* eslint-disable no-nested-ternary */
// import React from 'react';
// import Display from './display';
// import Panel from './panel';
// import calculate from '../logic/calculate';

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       total: '',
//       next: '',
//       operation: '',
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(event) {
//     const { value: buttonValue } = event.target;
//     const newState = calculate(this.state, buttonValue);
//     this.setState(newState);
//     console.log(newState);
//   }

//   render() {
//     const { total, next } = this.state;
//     return (
//       <>
//         <Display result={next === '' ? total === '' ? undefined : total : next} />
//         <Panel clickHandler={this.handleClick} />
//       </>
//     );
//   }
// }
import { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './display';
import Panel from './panel';

const App = () => {
  const [state, setState] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const { total, next } = state;

  const handleClick = ({ target: { value: buttonValue } }) => {
    const newState = calculate(state, buttonValue);
    setState(newState);
  };

  return (
    <>
      <Display result={next === '' ? total === '' ? undefined : total : next} />
      <Panel clickHandler={handleClick} />
    </>
  );
};

export default App;
