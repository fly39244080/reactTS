// routes.tsx
import React from 'react';
import {HashRouter as Router,Route,Link,Switch } from 'react-router-dom';
// Switch只显示匹配到的第一个路由
import routes from './index';

// components视图组件
import HomeData from '../components/HomeData';
class Routes extends React.Component{
    render() {
        return(
            <Switch>
                {routes.map((r: any) => {
                    const router = (r: any) => {
                        return <Route key={r.key} path={r.key} component={components[r.component||'']}/>
                    }
                    return (<div>dddd</div>)
                    // return r.component
                    //     ?router(r)
                    //     :r.subs&&r.subs.map(i=>router(i))
                })}
            </Switch>
        )
    }
}



const components: any = {
    HomeData
}
export default Routes