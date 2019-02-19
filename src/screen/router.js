import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '@/screen/Home';
import Html_view from '@/screen/Html_view';
import Css_view from '@/screen/Css_view';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Route exact={true} path='/' render={()=><Redirect to='/Home' />}/>
                <Route path='/Home' component={Home}/>
                <Route path='/Html_view' component={Html_view}/>
                <Route path='/Css_view' component={Css_view}/>
            </div>
        )
    }
}