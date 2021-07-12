import React,{Component} from 'react';
import {HashRouter as Router,Route,Link,Switch } from 'react-router-dom';
import Main from '../pages/Main';
import About from '../pages/About';
class Home extends Component {
    constructor(props:any) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Router>
                <div>
                <ul>
                    <li>
                        <Link to="/">main</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                </ul>
                <hr />
                {/* {this.props.children} */}
                </div>
                {/* Switch匹配到第一个路由就不会继续匹配了,
                如果不加Route 里不加 exact，那么凡是Link里面 to 的路径包含了/，
                那么就会被匹配到，于是Switch就不继续匹配下去
                
                */}
                <Switch>
                    <Route  exact path="/" component={Main}></Route>
                    <Route  path="/about" component={About}></Route>
                </Switch>
            </Router>
            
        );
    }
}

export default Home;
