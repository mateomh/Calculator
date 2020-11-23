/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import NavBar from '../navbar';

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

test('1. Navbar rendering', () => {
  let links = document.getElementsByTagName('a');
  expect(links.length).toBe(0);
  render(<NavBar />, container);
  links = document.getElementsByTagName('a');
  expect(links.length).toBe(3);
});

test('2. Navbar has the correct text', () => {
  render(<NavBar />, container);
  expect(container.textContent).toContain('Math Magicians');
  expect(container.textContent).toContain('Home');
  expect(container.textContent).toContain('Calculator');
  expect(container.textContent).toContain('Quote');
});
