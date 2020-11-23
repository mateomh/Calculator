/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import PropTypes from 'prop-types';
import Button from '../button';

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

test('1. Button rendering', () => {
  let buttons = document.getElementsByTagName('button');
  expect(buttons.length).toBe(0);
  act(() => {
    render(<Button value="9" clickCallBack={() => {}} type="" />, container);
  });
  buttons = document.getElementsByTagName('button');
  expect(buttons.length).toBe(1);
});

test('2. Button renders the value', () => {
  act(() => {
    render(<Button value="9" clickCallBack={() => {}} type="" />, container);
  });
  const buttons = document.getElementsByTagName('button');
  expect(buttons[0].textContent).toBe('9');
});

test('3. Types for the props', () => {
  expect(Button.propTypes.clickCallBack).toBe(PropTypes.func.isRequired);
  expect(Button.propTypes.value).toBe(PropTypes.string.isRequired);
  expect(Button.propTypes.type).toBe(PropTypes.string.isRequired);
});
