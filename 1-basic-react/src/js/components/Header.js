import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      mood: 'Happy I guess',
    }
  }

  pissedOff = () => {
    this.setState({
      mood: "Pissed off!!",
    })
  }

  happyAgain = () => {
    this.setState({
      mood: "Happy!!!!",
    })
  }
 
  updateMood = (e) => {
    this.setState({
      mood: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <h5>these are props passed from layout to Header</h5>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.hobby}</li>
          <li>{this.props.welcome}</li>
        </ul>
        <h5>these props are passed by Header to Title, but different from Header props</h5>

        <Title
          mood={this.state.mood}
          name="Name: prop passed from Header to Title"
          welcome="Welcome: prop passed from Header to Title"
          hobby="Hobby: prop passed from Header to Title"
          />
          <hr />
          <label>Enter your mood: </label>
          <input onChange={this.updateMood} value={this.state.mood}></input>
          
          <hr />
          <button onClick={this.pissedOff}>If you're NOT happy and you know it, click this button</button>
        <br />
        <br />
        <button onClick={this.happyAgain}>If you're happy and you know it, click this button</button>
      </div>
    );
  }
}


Header.defaultProps = {
  color: 'Blue',
  city: 'Boston',
}