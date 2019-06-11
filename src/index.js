import React from 'react';
import { render } from 'react-dom';
import Counter from './components/Counter';
import './styles/index.scss'

const App =  () => {
    return (
        <Counter init = {0} />
    )
}

render( <App />, document.getElementById('root'))