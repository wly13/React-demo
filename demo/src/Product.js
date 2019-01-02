import React, {Component} from "react";
import {Link} from "react-router"
import ProductData from "../data/Product";
class Product extends Component {
    constructor(props){
        super(props);
        this.pageNext=this.pageNext.bind(this);
        this.setPage=this.setPage.bind(this);
        this.state = {
            indexList:[],//当前渲染的页面数据
            totalData:ProductData.ProductData,//获取的总数据
            current: 1, //当前页码
            pageSize:3, //每页显示的条数
            goValue:0,  //要去的页数index
            totalPage:0,//总页数
        };
    console.log(ProductData)
    }
    componentWillMount(){
        //设置总页数
        this.setState({
            totalPage:Math.ceil( this.state.totalData.length/this.state.pageSize),
        })
        this.pageNext(this.state.goValue)

    }
    //设置内容
    setPage(num){
        this.setState({
            indexList:this.state.totalData.slice(num,num+this.state.pageSize)
        })
    }
    pageNext (num) {
        this.setPage(num)
    }
    render() {
        return (
            <div className="main">
                <div className="top_bar">
                </div>
                <div className="lists">
                    <ul className="index">
                        {this.state.indexList.map(function (cont) {
                            return <List {...cont} />
                        })}
                    </ul>
                    <PageButton { ...this.state } pageNext={this.pageNext} />
                </div>
            </div>
        );
    }
}
class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // const { name,image } = this.props;
        const name=this.props.name;
        const image=this.props.image;
        return (
            <li >
                {/*<Link to={`/list/listmore/${idd}`} >
                </Link>*/}
                <p>{name}</p>
                <img width="120px" height="120px" src={image} alt="000"/>
            </li>
        );
    }
}
class PageButton extends Component {
    constructor(props) {
        super(props);
        this.setNext=this.setNext.bind(this);
        this.setUp=this.setUp.bind(this);
        this.state={
            num: 0,
            pagenum:this.props.current
        }
    }
    //下一页
    setNext(){
        if(this.state.pagenum < this.props.totalPage){
            this.setState({
                num:this.state.num + this.props.pageSize,
                pagenum:this.state.pagenum + 1
            },function () {
                console.log(this.state)
                this.props.pageNext(this.state.num)
            })
        }
    }
    //上一页
    setUp(){
        if(this.state.pagenum > 1){
            this.setState({
                num:this.state.num - this.props.pageSize,
                pagenum:this.state.pagenum - 1
            },function () {
                console.log(this.state)
                this.props.pageNext(this.state.num)
            })
        }
    }
    render() {
        return (
            <div className="change_page">
                <span onClick={ this.setUp } >上一页</span>
                <span>{ this.state.pagenum }页/ { this.props.totalPage }页</span>
                <span onClick={ this.setNext }>下一页</span>
            </div>
        );
    }
}
export default Product;