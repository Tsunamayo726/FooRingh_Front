import React from "react";
import api from "../api/apiCon";
import { For } from 'react-loops'
import PostComponent from "../components/PostComponent";
import "./TimeLine.css"

export default class TimeLine extends React.Component {
  constructor(props) {
    super(props)
    console.log("Timeline")
    this.state = {
      post_list:[1,2,3],
    }
  }


  componentDidMount(){
    api.get_timeline().then((result)=>{
      console.log(result);

      const component = <h1>hello world</h1>

      this.setState({
        post_list:result,
      });
    });
  }

  render() {
    return (
    <div className="timeline">
      <ul>
        <For of={this.state.post_list}>{item => 
          <div>
            <li>{item.text}</li>
          </div>
        }</For>
      </ul> 
    </div>);
  }
}
