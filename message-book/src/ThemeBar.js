import React from "react";
import ThemeContext from "./theme-context";
const ThemeBar=() =>{
  return(
      <ThemeContext.Consumer>
        {
          theme =>{
            // console.log(theme)
            return(
                <div className="theme"
                    style={{backgroundColor:theme.bgColor,color:theme.color}}>
                  测试
                </div>
            )
          }
        }
      </ThemeContext.Consumer>
  )
}
export default ThemeBar;