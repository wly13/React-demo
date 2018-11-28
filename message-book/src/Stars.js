import React, {Component} from 'react';

class Stars extends Component {
  constructor(props){
    super(props);
    this.state={
      starsNum:0
    }
  }
  handleClickStar(stars){
    this.setState({
      starsNum:stars
    })
  }
  renderStars(){
    return(
        <div>
          {
            [1,2,3,4,5].map((item,index) =>{
              const light=this.state.starsNum>=item? "stars-red":""
              return (
                  <span
                      id="stars"
                      key={index}
                      className={light}
                      onClick={this.handleClickStar.bind(this,item)}
                  >☆</span>
              )
            })
          }
        </div>
    )
  }
  render() {
    return (
        <div>
          {this.renderStars()}
        </div>
    );
  }
}

export default Stars;