import React, { useState } from 'react';
import { render } from 'react-dom';
import Counter from './components/Counter';
import './styles/index.scss'

const App =  () => {
    const [ init ] = useState(0);
    return (
        <Counter init = { init } />
    )
}

render( <App />, document.getElementById('root'))