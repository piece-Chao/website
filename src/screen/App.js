import React from 'react';
import { HashRouter } from 'react-router-dom';
import MyRoute from './router';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <MyRoute />
            </HashRouter>
        )
    }
}

export default App;
