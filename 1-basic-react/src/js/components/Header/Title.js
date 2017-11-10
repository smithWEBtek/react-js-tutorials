import React from "react";

export default class Title extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <p>Mood passed as a prop from Header state: <em>{this.props.mood}</em></p>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.welcome}</li>
          <li>{this.props.hobby}</li>
        </ul>
      </div>
    );
  }
}
 