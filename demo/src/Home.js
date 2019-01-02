import React from 'react';
import Header from '../tpl/Header'
import Footer from '../tpl/Footer'
require('../style/bootstrap.css');
require('../style/icomoon.css');
// require('../style/simple-line-icons.css');

class Home extends React.Component{

    render() {
        return (
            <div>
                <p>这是首页</p>
                <Footer/>
            </div>
        );
    }
}
export default Home;