import React, {Component, Fragment} from 'react';

import CommentBox from "./CommentBox"
import CommentsList from "./CommentsList";
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ["this is my first comments"]
    }
    this.commentAdd = this.commentAdd.bind(this);
  }

  commentAdd(value) {
    this.setState({
      comments: [...this.state.comments, value]
    })
  }

  render() {
    const {comments} = this.state
    return (
        <Fragment>
          <CommentsList List={comments}/>
          <CommentBox
              commentAdd={this.commentAdd}
              componentsLength={comments.length}
          />
        </Fragment>
    );
  }
}

export default App;
