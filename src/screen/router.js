import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home from './Home';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Route exact={true} path='/' render={()=><Redirect to='/Home' />}/>
                <Route path='/Home' component={Home}/>
            </div>
        )
    }
}