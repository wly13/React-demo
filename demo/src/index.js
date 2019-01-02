import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import Header from '../tpl/Header'
import Home from '../src/Home';
import About from '../src/About';
import News from './News';
import Hire from '../src/Hire';
import Technology from '../src/Technology';
import Product from '../src/Product.js'

require('../style/style.css');
class RouterList extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path='/' component={Header}>{/*公用的*/}
                    <IndexRoute component={Home} />{/*默认显示*/}
                    <Route path='News' component={News}/>
                    <Route path='Product' component={Product}/>
                    <Route path='Hire' component={Hire}/>
                    <Route path='Technology' component={Technology}/>
                    <Route path='About' component={About}/>
                </Route>
            </Router>
        )
    }
}
ReactDOM.render(<RouterList />, document.getElementById('app'));