// import React from "react";

// import Body from "./Body";
// import Footer from "./Footer";
// import Header from "./Header";


// export default class Layout extends React.Component {
//   constructor() {
//     super();
  
//     this.state = {
//       title: "Welcome ",
//       name: "Brad Smith",
//     };
//   }
  
//   changeTitle(title) {
//     this.setState({title});
//   };

//   render() {    
//     setTimeout(()=>{
//       this.setState({
//         name: 'Bob',
//       })
//     }, 2000)

//     return (
//       <div>
//         <h1> {this.state.title} </h1>
//         <h4> {this.state.name} </h4>
//         <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
//         <Body />
//         <Footer />
//       </div>
//     );
//   }
// }
