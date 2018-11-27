import React,{Component} from "react";

class TodoItem extends Component{
    //子组件向父组件传值，要调用父组件传递过来的方法
    handleDelete(){
        this.props.handleDelete(this.props.index);
    }
    render(){
        return(
            <li onClick={this.handleDelete.bind(this)}>
                {this.props.content}
            </li>
        )
    }
}
export default TodoItem;
// module.exports=TodoItem;