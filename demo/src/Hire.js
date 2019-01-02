import React,{Component} from "react";
class Hire extends Component{
    constructor(props){
        super(props);
        this.state={
            HireData:[]
        }
    };
    componentDidMount(){
        $.get('../data/HireData.json',function (result) {
            this.setState({
                HireData: result.HireData
            });
        }.bind(this))
    };
    render(){
        return(
            <div>
                {
                    this.state.HireData.map(function (value, index) {
                        return(
                            <div key={index} className="col-lg-3">
                                <p>岗位：{value.position}</p>
                                <p>技能：{value.technology}</p>
                                <p>经验：{value.experience}</p>
                                <p>薪资：{value.wage}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Hire;
