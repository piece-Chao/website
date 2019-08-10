import React, { Component, Suspense, lazy } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Home = lazy (() => import('@/screen/Home'));
const Html_view = lazy (() => import('@/screen/Html_view'));
const Css_view = lazy (() => import('@/screen/Css_view'));
const Js_view = lazy (() => import('@/screen/Js_view'));
const Http_view = lazy (() => import('@/screen/Http_view'));
const Ts_view = lazy (() => import('@/screen/Ts_view'));
const Frame_view = lazy (() => import('@/screen/Frame/Frame_view'));
const React_redux = lazy (() => import('@/screen/Frame/React_redux'));
const Redux_saga = lazy (() => import('@/screen/Frame/Redux_saga'));
const Java_view = lazy (() => import('@/screen/Java_view'));
const Mobile_view = lazy (() => import('@/screen/Mobile_view'));
const Extend_view = lazy (() => import('@/screen/Extend/Extend_view'));
const Extend_art1 = lazy (() => import('@/screen/Extend/Extend_art1'));
const Extend_art2 = lazy (() => import('@/screen/Extend/Extend_art2'));
const Extend_art3 = lazy (() => import('@/screen/Extend/Extend_art3'));
const Extend_art4 = lazy (() => import('@/screen/Extend/Extend_art4'));
const Extend_art5 = lazy (() => import('@/screen/Extend/Extend_art5'));
const Sprogram_view = lazy (() => import('@/screen/Sprogram/Sprogram_view'));
const Sprogram_art1 = lazy (() => import('@/screen/Sprogram/Sprogram_art1'));
const Sprogram_art2 = lazy (() => import('@/screen/Sprogram/Sprogram_art2'));
const Sprogram_art3 = lazy (() => import('@/screen/Sprogram/Sprogram_art3'));
const Sprogram_art4 = lazy (() => import('@/screen/Sprogram/Sprogram_art4'));
const Sprogram_art5 = lazy (() => import('@/screen/Sprogram/Sprogram_art5'));
const Sprogram_art6 = lazy (() => import('@/screen/Sprogram/Sprogram_art6'));
const Sprogram_art7 = lazy (() => import('@/screen/Sprogram/Sprogram_art7'));
const Sort_view = lazy (() => import('@/screen/Sort/Sort_view'));
const Sort_art1 = lazy (() => import('@/screen/Sort/Sort_art1'));
const Sort_art2 = lazy (() => import('@/screen/Sort/Sort_art2'));
const Sort_art3 = lazy (() => import('@/screen/Sort/Sort_art3'));
const Sort_art4 = lazy (() => import('@/screen/Sort/Sort_art4'));
const Sort_art5 = lazy (() => import('@/screen/Sort/Sort_art5'));
const Sort_art6 = lazy (() => import('@/screen/Sort/Sort_art6'));
const Sort_art7 = lazy (() => import('@/screen/Sort/Sort_art7'));
const Sort_art8 = lazy (() => import('@/screen/Sort/Sort_art8'));
const Sort_art9 = lazy (() => import('@/screen/Sort/Sort_art9'));
const Sort_art10 = lazy (() => import('@/screen/Sort/Sort_art10'));
const Range_view = lazy (() => import('@/screen/Range/Range_view'));
const Range_art1 = lazy (() => import('@/screen/Range/Range_art1'));
const Range_art2 = lazy (() => import('@/screen/Range/Range_art2'));
const Range_art3 = lazy (() => import('@/screen/Range/Range_art3'));
const Range_art4 = lazy (() => import('@/screen/Range/Range_art4'));
const Range_art5 = lazy (() => import('@/screen/Range/Range_art5'));
const Css_Why_art = lazy (() => import('@/screen/Css_Why_art'));
const File_Continuingly = lazy (() => import('@/screen/File_Continuingly'));

class ScrollToTop extends Component {
    componentDidUpdate() {
        document.body.scrollTo(0, 0)
    }
    render() {
        return this.props.children
    }
}

class _Router extends Component {
    render() {
        return (
            <ScrollToTop>
                <Suspense fallback={<span></span>}>
                    <Route exact={true} path='/' render={()=><Redirect to='/Home' />}/>
                    <Route path='/Home' component={Home}/>
                    <Route path='/Html_view' component={Html_view}/>
                    <Route path='/Css_view' component={Css_view}/>
                    <Route path='/Js_view' component={Js_view}/>
                    <Route path='/Http_view' component={Http_view}/>
                    <Route path='/Ts_view' component={Ts_view}/>
                    <Route path='/Frame_view' component={Frame_view}/>
                    <Route path='/React_redux' component={React_redux}/>
                    <Route path='/Redux_saga' component={Redux_saga}/>
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
                    <Route path='/File_Continuingly' component={File_Continuingly}/>
                </Suspense>
            </ScrollToTop>
        )
    }
}

export default withRouter(_Router)