import React, { Component, Suspense, lazy } from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';

const Home = lazy (() => import('@/screen/Home'));
const WebpackView = lazy (() => import('@/screen/Webpack/Webpack_view'));
const WebpackInduction = lazy (() => import('@/screen/Webpack/Webpack_induction'));
const CssView = lazy (() => import('@/screen/Css/Css_view'));
const CssWhyArt = lazy (() => import('@/screen/Css/Css_Why_art'));
const ScssIntroduce = lazy (() => import('@/screen/Css/Scss_introduce'));
const JsView = lazy (() => import('@/screen/Js_view'));
const HttpView = lazy (() => import('@/screen/Http_view'));
const TsView = lazy (() => import('@/screen/Ts_view'));
const FrameView = lazy (() => import('@/screen/Frame/Frame_view'));
const ReactRedux = lazy (() => import('@/screen/Frame/React/React_redux'));
const ReduxSaga = lazy (() => import('@/screen/Frame/React/Redux_saga'));
const JavaView = lazy (() => import('@/screen/BackendRelated/Java_view'));
const NginxIntroduction = lazy (() => import('@/screen/BackendRelated/Nginx_introduction'));
const NginxBasic = lazy (() => import('@/screen/BackendRelated/Nginx_basic'));
const MobileView = lazy (() => import('@/screen/Mobile_view'));
const ExtendView = lazy (() => import('@/screen/Extend/Extend_view'));
const ExtendArt1 = lazy (() => import('@/screen/Extend/Extend_art1'));
const ExtendArt2 = lazy (() => import('@/screen/Extend/Extend_art2'));
const ExtendArt3 = lazy (() => import('@/screen/Extend/Extend_art3'));
const ExtendArt4 = lazy (() => import('@/screen/Extend/Extend_art4'));
const ExtendArt5 = lazy (() => import('@/screen/Extend/Extend_art5'));
const SprogramView = lazy (() => import('@/screen/Sprogram/Sprogram_view'));
const SprogramArt1 = lazy (() => import('@/screen/Sprogram/Sprogram_art1'));
const SprogramArt2 = lazy (() => import('@/screen/Sprogram/Sprogram_art2'));
const SprogramArt3 = lazy (() => import('@/screen/Sprogram/Sprogram_art3'));
const SprogramArt4 = lazy (() => import('@/screen/Sprogram/Sprogram_art4'));
const SprogramArt5 = lazy (() => import('@/screen/Sprogram/Sprogram_art5'));
const SprogramArt6 = lazy (() => import('@/screen/Sprogram/Sprogram_art6'));
const SprogramArt7 = lazy (() => import('@/screen/Sprogram/Sprogram_art7'));
const SortView = lazy (() => import('@/screen/Sort/Sort_view'));
const SortArt1 = lazy (() => import('@/screen/Sort/Sort_art1'));
const SortArt2 = lazy (() => import('@/screen/Sort/Sort_art2'));
const SortArt3 = lazy (() => import('@/screen/Sort/Sort_art3'));
const SortArt4 = lazy (() => import('@/screen/Sort/Sort_art4'));
const SortArt5 = lazy (() => import('@/screen/Sort/Sort_art5'));
const SortArt6 = lazy (() => import('@/screen/Sort/Sort_art6'));
const SortArt7 = lazy (() => import('@/screen/Sort/Sort_art7'));
const SortArt8 = lazy (() => import('@/screen/Sort/Sort_art8'));
const SortArt9 = lazy (() => import('@/screen/Sort/Sort_art9'));
const SortArt10 = lazy (() => import('@/screen/Sort/Sort_art10'));
const RangeView = lazy (() => import('@/screen/Range/Range_view'));
const RangeArt1 = lazy (() => import('@/screen/Range/Range_art1'));
const RangeArt2 = lazy (() => import('@/screen/Range/Range_art2'));
const RangeArt3 = lazy (() => import('@/screen/Range/Range_art3'));
const RangeArt4 = lazy (() => import('@/screen/Range/Range_art4'));
const RangeArt5 = lazy (() => import('@/screen/Range/Range_art5'));
const FileContinuingly = lazy (() => import('@/screen/File_Continuingly'));
const FunctionalCoding = lazy (() => import('@/screen/Functional_Coding'));
const SEO = lazy (() => import('@/screen/SEO'));
const LifeCycle = lazy (() => import('@/screen/Frame/Vue/LifeCycle'));
const Responsive = lazy (() => import('@/screen/Frame/Vue/Responsive'));
const VueStructure = lazy (() => import('@/screen/Frame/Vue/VueStructure'));

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
                    <Switch>
                        <Route exact={true} path='/' render={()=><Redirect to='/Home' />}/>
                        <Route path='/Home' component={props => <Home {...props}/>}/>
                        <Route path='/Webpack_view' component={props => <WebpackView {...props} />}/>
                        <Route path='/Webpack_induction' component={props => <WebpackInduction {...props} />}/>
                        <Route path='/Css_view' component={props => <CssView {...props} />}/>
                        <Route path='/Css_Why_art' component={props => <CssWhyArt {...props} />}/>
                        <Route path='/Scss_introduce' component={props => <ScssIntroduce {...props} />}/>
                        <Route path='/Js_view' component={props => <JsView {...props} />}/>
                        <Route path='/Http_view' component={props => <HttpView {...props} />}/>
                        <Route path='/Ts_view' component={props => <TsView {...props} />}/>
                        <Route path='/Frame_view' component={props => <FrameView {...props} />}/>
                        <Route path='/React_redux' component={props => <ReactRedux {...props} />}/>
                        <Route path='/Redux_saga' component={props => <ReduxSaga {...props} />}/>
                        <Route path='/LifeCycle' component={props => <LifeCycle {...props} />}/>
                        <Route path='/Responsive' component={props => <Responsive {...props} />}/>
                        <Route path='/Java_view' component={props => <JavaView {...props} />}/>
                        <Route path='/Mobile_view' component={props => <MobileView {...props} />}/>
                        <Route path='/Extend_view' component={props => <ExtendView {...props} />}/>
                        <Route path='/Extend_art1' component={props => <ExtendArt1 {...props} />}/>
                        <Route path='/Extend_art2' component={props => <ExtendArt2 {...props} />}/>
                        <Route path='/Extend_art3' component={props => <ExtendArt3 {...props} />}/>
                        <Route path='/Extend_art4' component={props => <ExtendArt4 {...props} />}/>
                        <Route path='/Extend_art5' component={props => <ExtendArt5 {...props} />}/>
                        <Route path='/Sprogram_view' component={props => <SprogramView {...props} />}/>
                        <Route path='/Sprogram_art1' component={props => <SprogramArt1 {...props} />}/>
                        <Route path='/Sprogram_art2' component={props => <SprogramArt2 {...props} />}/>
                        <Route path='/Sprogram_art3' component={props => <SprogramArt3 {...props} />}/>
                        <Route path='/Sprogram_art4' component={props => <SprogramArt4 {...props} />}/>
                        <Route path='/Sprogram_art5' component={props => <SprogramArt5 {...props} />}/>
                        <Route path='/Sprogram_art6' component={props => <SprogramArt6 {...props} />}/>
                        <Route path='/Sprogram_art7' component={props => <SprogramArt7 {...props} />}/>
                        <Route path='/Sort_view' component={props => <SortView {...props} />}/>
                        <Route path='/Sort_art1' component={props => <SortArt1 {...props} />}/>
                        <Route path='/Sort_art2' component={props => <SortArt2 {...props} />}/>
                        <Route path='/Sort_art3' component={props => <SortArt3 {...props} />}/>
                        <Route path='/Sort_art4' component={props => <SortArt4 {...props} />}/>
                        <Route path='/Sort_art5' component={props => <SortArt5 {...props} />}/>
                        <Route path='/Sort_art6' component={props => <SortArt6 {...props} />}/>
                        <Route path='/Sort_art7' component={props => <SortArt7 {...props} />}/>
                        <Route path='/Sort_art8' component={props => <SortArt8 {...props} />}/>
                        <Route path='/Sort_art9' component={props => <SortArt9 {...props} />}/>
                        <Route path='/Sort_art10' component={props => <SortArt10 {...props} />}/>
                        <Route path='/Range_view' component={props => <RangeView {...props} />}/>
                        <Route path='/Range_art1' component={props => <RangeArt1 {...props} />}/>
                        <Route path='/Range_art2' component={props => <RangeArt2 {...props} />}/>
                        <Route path='/Range_art3' component={props => <RangeArt3 {...props} />}/>
                        <Route path='/Range_art4' component={props => <RangeArt4 {...props} />}/>
                        <Route path='/Range_art5' component={props => <RangeArt5 {...props} />}/>
                        <Route path='/File_Continuingly' component={props => <FileContinuingly {...props} />}/>
                        <Route path='/Functional_Coding' component={props => <FunctionalCoding {...props} />}/>
                        <Route path='/SEO' component={props => <SEO {...props} />}/>
                        <Route path='/Nginx_introduction' component={props => <NginxIntroduction {...props} />} />
                        <Route path='/Nginx_basic' component={props => <NginxBasic {...props} />} />
                        <Route path='/VueStructure' component={props => <VueStructure {...props} />} />
                    </Switch>
                </Suspense>
            </ScrollToTop>
        )
    }
}

export default withRouter(_Router);