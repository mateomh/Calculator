import React from 'react';
import Display from './display';
import Panel from './panel';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    return event.target.value;
  }

  render() {
    return (
      <fragment>
        <Display />
        <Panel clickHandler={this.handleClick} />
      </fragment>
    );
  }
}
