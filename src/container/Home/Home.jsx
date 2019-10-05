import React, { Component } from "react";
// import Product from "../Product/Product";
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";

class Home extends Component {
  state = {
    // showComp: true
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComp: false
    //   });
    // }, 15000);
  }

  render() {
    return (
      <div>
        {/* <p>Counter</p>
          <hr />
          <Product/> */}
        {/* <p>LifeCycle Component</p>
        <hr />
        {this.state.showComp ? <LifeCycleComp /> : null}
        <LifeCycleComp /> */}
        <p>Blog Post</p>
        <hr />
        <BlogPost />
      </div>
    );
  }
}

export default Home;
