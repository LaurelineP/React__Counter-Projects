import React from 'react';
import { render as RRender } from 'react-dom';
import { render, fireEvent } from '@testing-library/react';

import 'jest-dom/extend-expect';
import Counter from '../components/Counter';

// USING REACTDOM RENDER
/* 0. testing that the component renders */
/* 1. testing result from triggered buttons */

function triggerWithReactDOM() {
    test('[ REACT-DOM ] inits elements in component', () => {
        // 0. create a div to simulate render div
        const div = document.createElement( 'div' );
        document.body.appendChild( div );
        RRender( <Counter />, div );

        // 0. expected to have a p with class result having the value 0 
        const result = document.body.querySelector( 'p.result' );
        expect( result.textContent ).toBe( '0' );

        // 0. assertion : expected to have 2 buttons : one to increment ( + ) one to decrement ( - )
        const buttons = document.querySelectorAll( 'button' );
        expect( buttons.length ).toEqual( 2 );
        expect( buttons[0].textContent ).toBe( "+" );
        expect( buttons[1].textContent ).toBe( "-" );

        // 1. triggering buttons
        buttons[ 0 ].click();
        expect( result.innerHTML ).toBe( '1' );
        buttons[ 1 ].click();
        expect( result.innerHTML ).toBe( '0' );
        buttons[ 1 ].click();
        expect( result.innerHTML ).toBe( '0') ;
    });
}

// USING REACT-TESTING-LIBRART RENDER
/* 0. testing that the component renders */
/* 1. testing result from triggered buttons */

function triggerWithRTL() {
    test('[ REACT-TESTING-LIBRARY ] inits elements in component', () => {
        // 0. checking elements initialization
        const { getByText } = render( <Counter /> );
        const result = getByText( '0' );
        const incrementBtn = getByText( '+' );
        const decrementBtn = getByText( '-' );

        // 1. checking elements' trigerring and expected result
        expect( result.innerHTML ).toBe( '0' );
        fireEvent.click( incrementBtn );
        expect( result.innerHTML ).toBe( '1' );
        fireEvent.click( decrementBtn );
        expect( result.innerHTML ).toBe( '0' );
        fireEvent.click( decrementBtn );
        expect( result.innerHTML ).toBe( '0' );
    });
}

triggerWithReactDOM();
//triggerWithRTL();
