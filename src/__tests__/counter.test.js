import React from 'react';
import { render as RRender } from 'react-dom';
<<<<<<< HEAD
import { render, fireEvent, cleanup, within, getByTestId } from '@testing-library/react';
=======
import { render, fireEvent } from '@testing-library/react';
>>>>>>> [UPD] testing with react-dom and testing with react-testing-library + cleanup

import 'jest-dom/extend-expect';
import Counter from '../components/Counter';

<<<<<<< HEAD
// Will clean the DOM at the end of every test
afterEach(cleanup)

// USING REACTDOM RENDER
/**
 * 0. testing that the component renders
 * 1. testing result from triggered buttons 
 */
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

=======
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

>>>>>>> [UPD] testing with react-dom and testing with react-testing-library + cleanup
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
<<<<<<< HEAD
        const { getByText, debug, unmount } = render( <Counter /> );
=======
        const { getByText } = render( <Counter /> );
>>>>>>> [UPD] testing with react-dom and testing with react-testing-library + cleanup
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
<<<<<<< HEAD

        /** 
         * 3. afterAll(cleanup) : will cleanup the dom at the end of every test
         * 4. debug([<el>]) : will log your dom in a pretty way ( also see prettyDOM toom)
         * 5. unmount : unmount your component
         * 6. asFragment shapshot your component by creating a copy
         * 7. within ( an alias for getQueriesForElement ) takes a DOM & binds it to the query function
         * 
        */

        // 4. debug p in DOM
        debug( result );

        // 5. unmounting component:
        debug();        // --> shows the full DOM
        unmount();      // --> clean the DOM from your component
        debug();        // --> shows the full DOM ( cleaned )

    });

    // 6. taking a snapshot of your component
    it( "renders the component", () => {
        const { asFragment } = render(<Counter />)
        expect( asFragment() ).toMatchSnapshot();
    })

    it( "has text content value of 0", () => {
        /* Updating my component Counter with an attribute provided by RTL: getByTestId
        ( obviously snapshot test will fail )
        */
        const { getByTestId } = render(<Counter />);
        expect(getByTestId('resultInit')).toHaveTextContent('0');
    })
}

//triggerWithReactDOM();
triggerWithRTL();

/**
 * Try to avoid snapshots
 */

=======
    });
}

triggerWithReactDOM();
//triggerWithRTL();
>>>>>>> [UPD] testing with react-dom and testing with react-testing-library + cleanup
