import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import Post from "../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1
    },
    isUpdate: false
  };

  getPostAPI = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc,asc")
      .then(result => {
        this.setState({
          post: result.data
        });
      });
  };

  postDataToAPI = () => {
    axios.post("http://localhost:3004/posts", this.state.formBlogPost).then(
      res => {
        console.log(res);
        this.getPostAPI();
        this.setState({
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1
          }
        });
      },
      err => {
        console.log(err);
      }
    );
  };

  putDataToAPI = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then(res => {
        console.log(res);
        this.getPostAPI();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1
          }
        });
      });
  };

  handleRemove = data => {
    axios.delete(`http://localhost:3004/posts/${data}`).then(res => {
      this.getPostAPI();
    });
  };

  handleUpdate = data => {
    console.log(data);
    this.setState({
      formBlogPost: data,
      isUpdate: true
    });
  };

  handleFormChange = event => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timestamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timestamp;
    }
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: formBlogPostNew
    });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };

  componentDidMount() {
    this.getPostAPI();
  }
  render() {
    return (
      <Fragment>
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={this.state.formBlogPost.title}
            name="title"
            placeholder="Add Title Here"
            onChange={this.handleFormChange}
          />
          <label htmlFor="body">Blog Content</label>
          <textarea
            name="body"
            value={this.state.formBlogPost.body}
            id="body"
            cols="30"
            rows="10"
            placeholder="Add Description"
            onChange={this.handleFormChange}
          />
          <button className="btn-submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
        {this.state.post.map(post => {
          return (
            <Post
              key={post.id}
              data={post}
              remove={this.handleRemove}
              update={this.handleUpdate}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
