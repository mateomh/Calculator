/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './display';
import Panel from './panel';
import NavBar from './navbar';

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
      <NavBar />
      <Display result={next === '' ? total === '' ? undefined : total : next} />
      <Panel clickHandler={handleClick} />
    </>
  );
};

export default App;
