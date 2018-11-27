import React, {Component} from "react"

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      isDisabled: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this)
  }

  handleSubmit(event) {
    if (this.inputText.value===""){
      alert("你还没有输入评论，请先输入评论");
    }else{
      this.props.commentAdd(this.inputText.value);
      this.setState({
        inputValue: ""
      })
    }
    event.preventDefault();
  }
  inputChange(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }
  render() {
    const {componentsLength} = this.props;
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text"
                   placeholder="请输入留言"
                   ref={(inputValue) => {
                     this.inputText = inputValue
                   }}
                   value={this.state.inputValue}
                   onChange={this.inputChange}
                   className="inputStyle"
            />
            <br/>
            <button type="submit" className="Btn-submit">留言</button>
            <span className="comments-length">已经有{componentsLength}条评论</span>
          </form>

        </div>
    )
  }
}

export default CommentBox