import React from "react";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";


export default class Layout extends React.Component {
  render() { 
    const title = "Welcome Bradley!"
    const hobby = "Golf" 

    return (
      <div>
        <Header 
          hobby="Swimming"
          title="General of Studies"
          />
        <Body />
        <Footer />
      </div>
    );
  }
}
