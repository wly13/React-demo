import React, {Component, Fragment} from 'react';

import CommentBox from "./CommentBox"
import CommentsList from "./CommentsList";
import ThemeContext from "./theme-context"
import ThemeBar from "./ThemeBar"
import "./App.css"

const theme = {
  light: {
    bgColor: "#eeeeee",
    color: "#f5f"
  },
  dark: {
    bgColor: "#222222",
    color: "#fff"
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ["this is my first comments"],
      theme:"light"
    }
    this.commentAdd = this.commentAdd.bind(this);
    // this.handleLight = this.handleLight.bind(this);
    // this.handleDark = this.handleDark.bind(this);
    this.changTheme = this.changTheme.bind(this);
  }

  commentAdd(value) {
    this.setState({
      comments: [...this.state.comments, value]
    })
  };
/*  handleLight(){
    this.setState({
      theme:"light"
    })
  };
  handleDark(){
    this.setState({
      theme:"dark"
    })
  };*/
  changTheme(theme){
    this.setState({
      theme:theme
    })
  }
  render() {
    const {comments} = this.state
    return (
        <ThemeContext.Provider value={theme[this.state.theme]}>
          <Fragment>
            <div>
              <button type="button" onClick={() =>{this.changTheme("light")}}>深色主题</button>
              <button type="button" onClick={() =>{this.changTheme("dark")}}>浅色主题</button>
            </div>
            <CommentsList List={comments}/>
            <CommentBox
                commentAdd={this.commentAdd}
                componentsLength={comments.length}
            />
          </Fragment>
          <ThemeBar/>
        </ThemeContext.Provider>
    );
  }
}

export default App;
