import React, { Component, Fragment } from "react";
import Post from "./Post";
import "./styles.scss";

export class Explore extends Component {
  constructor(props) {
    super(props);

    const post = [
      {
        id: 1,
        title: "paris",
        desc:
          "beautiful,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: 2,
        title: "chicago",
        desc:
          "busy,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ];

    this.state = {
      posts: post,
    };
  }

  render() {
    return (
      <Fragment>
        <h1>Explore</h1>
        <div className="card-container">
          {this.state.posts.map((p) => (
            <Post key={p.id} title={p.title} description={p.desc}></Post>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Explore;
