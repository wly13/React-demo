import React, { Component } from 'react'

import img1 from '../../../img/323288.jpg'
export default class Home extends Component {
  render() {
    return (
      <div>
        <p>这是主页</p>
        <img src={img1} alt="" style={{height:50,width:50}}/>
      </div>
    )
  }
}
