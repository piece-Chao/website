import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '@/screen/Home';
import Html_view from '@/screen/Html_view';
import Css_view from '@/screen/Css_view';
import Js_view from '@/screen/Js_view';
import Http_view from '@/screen/Http_view';
import Ts_view from '@/screen/Ts_view';
import Frame_view from '@/screen/Frame/Frame_view';
import Java_view from '@/screen/Java_view';
import Mobile_view from '@/screen/Mobile_view';
import Extend_view from '@/screen/Extend/Extend_view';
import Extend_art1 from '@/screen/Extend/Extend_art1';
import Extend_art2 from '@/screen/Extend/Extend_art2';
import Extend_art3 from '@/screen/Extend/Extend_art3';
import Extend_art4 from '@/screen/Extend/Extend_art4';
import Extend_art5 from '@/screen/Extend/Extend_art5';
import Range_view from '@/screen/Range/Range_view';
import Sprogram_view from '@/screen/Sprogram/Sprogram_view';
import Sprogram_art1 from '@/screen/Sprogram/Sprogram_art1';
import Sprogram_art2 from '@/screen/Sprogram/Sprogram_art2';
import Sprogram_art3 from '@/screen/Sprogram/Sprogram_art3';
import Sprogram_art4 from '@/screen/Sprogram/Sprogram_art4';
import Sprogram_art5 from '@/screen/Sprogram/Sprogram_art5';
import Sprogram_art6 from '@/screen/Sprogram/Sprogram_art6';
import Sprogram_art7 from '@/screen/Sprogram/Sprogram_art7';
import Sort_view from '@/screen/Sort/Sort_view';
import Sort_art1 from '@/screen/Sort/Sort_art1';
import Sort_art2 from '@/screen/Sort/Sort_art2';
import Sort_art3 from '@/screen/Sort/Sort_art3';
import Sort_art4 from '@/screen/Sort/Sort_art4';
import Sort_art5 from '@/screen/Sort/Sort_art5';
import Sort_art6 from '@/screen/Sort/Sort_art6';
import Sort_art7 from '@/screen/Sort/Sort_art7';
import Sort_art8 from '@/screen/Sort/Sort_art8';
import Sort_art9 from '@/screen/Sort/Sort_art9';
import Sort_art10 from '@/screen/Sort/Sort_art10';
import Css_Why_art from '@/screen/Css_Why_art';
import Range_art1 from '@/screen/Range/Range_art1';
import Range_art2 from '@/screen/Range/Range_art2';
import Range_art3 from '@/screen/Range/Range_art3';
import Range_art4 from '@/screen/Range/Range_art4';
import Range_art5 from '@/screen/Range/Range_art5';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Route exact={true} path='/' render={()=><Redirect to='/Home' />}/>
                <Route path='/Home' component={Home}/>
                <Route path='/Html_view' component={Html_view}/>
                <Route path='/Css_view' component={Css_view}/>
                <Route path='/Js_view' component={Js_view}/>
                <Route path='/Http_view' component={Http_view}/>
                <Route path='/Ts_view' component={Ts_view}/>
                <Route path='/Frame_view' component={Frame_view}/>
                <Route path='/Java_view' component={Java_view}/>
                <Route path='/Mobile_view' component={Mobile_view}/>
                <Route path='/Extend_view' component={Extend_view}/>
                <Route path='/Extend_art1' component={Extend_art1}/>
                <Route path='/Extend_art2' component={Extend_art2}/>
                <Route path='/Extend_art3' component={Extend_art3}/>
                <Route path='/Extend_art4' component={Extend_art4}/>
                <Route path='/Extend_art5' component={Extend_art5}/>
                <Route path='/Range_view' component={Range_view}/>
                <Route path='/Sprogram_view' component={Sprogram_view}/>
                <Route path='/Sprogram_art1' component={Sprogram_art1}/>
                <Route path='/Sprogram_art2' component={Sprogram_art2}/>
                <Route path='/Sprogram_art3' component={Sprogram_art3}/>
                <Route path='/Sprogram_art4' component={Sprogram_art4}/>
                <Route path='/Sprogram_art5' component={Sprogram_art5}/>
                <Route path='/Sprogram_art6' component={Sprogram_art6}/>
                <Route path='/Sprogram_art7' component={Sprogram_art7}/>
                <Route path='/Sort_view' component={Sort_view}/>
                <Route path='/Sort_art1' component={Sort_art1}/>
                <Route path='/Sort_art2' component={Sort_art2}/>
                <Route path='/Sort_art3' component={Sort_art3}/>
                <Route path='/Sort_art4' component={Sort_art4}/>
                <Route path='/Sort_art5' component={Sort_art5}/>
                <Route path='/Sort_art6' component={Sort_art6}/>
                <Route path='/Sort_art7' component={Sort_art7}/>
                <Route path='/Sort_art8' component={Sort_art8}/>
                <Route path='/Sort_art9' component={Sort_art9}/>
                <Route path='/Sort_art10' component={Sort_art10}/>
                <Route path='/Css_Why_art' component={Css_Why_art}/>
                <Route path='/Range_art1' component={Range_art1}/>
                <Route path='/Range_art2' component={Range_art2}/>
                <Route path='/Range_art3' component={Range_art3}/>
                <Route path='/Range_art4' component={Range_art4}/>
                <Route path='/Range_art5' component={Range_art5}/>
            </div>
        )
    }
}