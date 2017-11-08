import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  constructor(){
    super()

    this.state = {
      bird: 'Robin',
      dog: 'Fido'
    }
  }

  handleChange(e) {
    const title = e.target.value;
    const hobby = this.props.hobby;
    this.props.changeTitle(title);
  }

  render() {
    console.log("Props:", this.props)
    console.log("State:", this.state)
    return (
      <div>
        <Title title={this.props.title} hobby={this.props.hobby}/>
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
