import React, { Component ,Fragment} from 'react';

import TodoItem from "./TodoItem";

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[
                "learn react",
                "learn english",
                "learn vue"
            ],
            inputValue:"",
        }
    }
    handleButtonClick(){
        this.setState({
            // list:[...this.state.list,"hello world"]//...this.state.list指代初始化的数据
            list:[...this.state.list,this.state.inputValue],
            inputValue:""
        })
    };
    handleInputChange(e){
        this.setState({
            inputValue:e.target.value,
        })
        console.log("wang-tag value="+e.target.value)
    };
    handleItemClick(index){
        console.log("wang-tag index="+index);
        const list=[...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
    handleDelete(index){
        console.log(index);
        const list=[...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
  render() {
    return (
      <Fragment>
          <div>
              <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
              <button onClick={this.handleButtonClick.bind(this)}>add</button>
          </div>
          <ul>
              {this.state.list.map((item,index) =>{
                  // return(<li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>)
                  //父组件通过属性向子组件传值，子组件通过props来获取父组件传递的值
                  return(
                      <TodoItem key={index} content={item} index={index} handleDelete={this.handleDelete.bind(this)}/>
                  )
              })}
          </ul>
      </Fragment>

    );
  }
}

export default TodoList;
