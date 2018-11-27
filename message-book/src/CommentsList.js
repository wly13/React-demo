import React, {Component} from "react";

class CommentsList extends Component {
  render() {
    const {List} = this.props
    return (
       <div>
         <span>评论列表</span>
         <ul className="commentsList">
           {List.map((list, index) => {
             return (
                 <li className="list-style" key={index}>{list}</li>
             )
           })}
         </ul>
       </div>
    )
  }
}

export default CommentsList