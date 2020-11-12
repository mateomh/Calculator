import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function Test() {
  return <div>Hello World From React</div>;
}

ReactDOM.render(
  <Test />,
  document.getElementById('root'),
);
