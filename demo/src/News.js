import React, {Component} from "react";
class News extends Component {
    constructor(props) {
        super(props);
        // this.pageNext=this.pageNext.bind(this);
        // this.setPage=this.setPage.bind(this);
        this.state = {
            NewData: [],
            indexList:[],//渲染当前页面的数据
            currentPage:1,//当前页码
            pageSize:6,//每页显示的数据条数
            goValue:0,//要去的页数index
            totalPage:5//总页数
        }
    };
    componentWillMount(){

    };
    componentDidMount() {
        $.get("http://api.tianapi.com/it/?key=\n" +
            "33457bbadb1179dc572fad4aff06b369\n&num="+this.state.pageSize, function (result) {
            console.log(result);
            this.setState({
                NewData: result.newslist,

            })
        }.bind(this));

    };
    setPage(num){
        this.setState({
            indexList:this.state.totalPage.slice(num,num+this.state.pageSize)
        })
    };
    pageNext(num){
        this.setPage(num);
    }

    render() {
        return (
            <div >

            </div>
        )
    }
}
class List extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const name=this.props.name;

    }
}
export default News;