import React, { Component } from "react";
import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
import Product from "../Product/Product";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
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
        <p>Youtube Component</p>
        <hr />
        <YouTubeComp
          time="7.12"
          title="Tutorial React JS - Bagian 1"
          desc="Halo 1"
          desc="2x ditonton. 2 hari yang lalu"
        />
        <YouTubeComp
          time="8.01"
          title="Tutorial React JS - Bagian 2"
          desc="Halo 2"
          desc="20x ditonton. 4 hari yang lalu"
        />
        <YouTubeComp
          time="5.09"
          title="Tutorial React JS - Bagian 3"
          desc="Halo 3"
          desc="10x ditonton. 5 hari yang lalu"
        />
        <YouTubeComp
          time="17.00"
          title="Tutorial React JS - Bagian 4"
          desc="Halo 4"
          desc="30x ditonton. 7 hari yang lalu"
        />
        <YouTubeComp />
        <p>Counter</p>
        <hr />
        <Product />
        <p>LifeCycle Component</p>
        <hr />
        {this.state.showComp ? <LifeCycleComp /> : null}
        <LifeCycleComp />
        <p>Blog Post</p>
        <hr />
        <BlogPost />
      </div>
    );
  }
}

export default Home;
