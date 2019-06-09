import React from 'react';
import { render } from '@testing-library/react';

import 'jest-dom/extend-expect';
import Counter from '../components/Counter';


/* 0. testing that the component renders */
test('initializes elements in component', () => {
  // create a div to simulate render div
    const div = document.createElement('div');
    render(<Counter />, div);

  //expected to have a p with class result having the value 0 
    const result = document.querySelector('p.result');
    expect(result.textContent).toBe('0');

  // expected to have 2 buttons : one to increment ( + ) one to decrement ( - )
    const buttons = document.querySelectorAll('button');
    expect(buttons.length).toEqual(2);
    expect(buttons[0].textContent).toBe("+");
    expect(buttons[1].textContent).toBe("-");
})