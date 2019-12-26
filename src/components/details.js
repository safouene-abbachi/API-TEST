import React, { Component } from "react";
import axios from "axios";

export default class Details extends Component {
  state = {
    list: []
  };

  getOneDetail = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?postsId=${this.props.match.params.id}`
      )
      .then(res =>
        this.setState({
          list: res.data
        })
      );
  };
  componentDidMount() {
    this.getOneDetail();
  }
  render() {
    return (
      <div className="detail">
        {this.state.list.map((el, key) => (
          <p>{el.body}</p>
        ))}
      </div>
    );
  }
}
