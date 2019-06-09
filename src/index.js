import React from 'react';
import { render } from 'react-dom';
import Counter from './components/Counter';
import './styles/index.scss'

const App =  () => {
    return (
        <Counter />
    )
}

render( <App />, document.getElementById('root'))