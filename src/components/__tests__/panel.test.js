/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import PropTypes from 'prop-types';
import Panel from '../panel';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('1. Panel Rendering', () => {
  let buttons = document.getElementsByTagName('button');
  expect(buttons.length).toBe(0);
  render(<Panel clickHandler={() => {}} />, container);
  buttons = document.getElementsByTagName('button');
  expect(buttons.length).toBe(19);
});

test('2. Types for the props', () => {
  expect(Panel.propTypes.clickHandler).toBe(PropTypes.func.isRequired);
});
