import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Posts extends Component {
  state = {
    list: []
  };

  getOneUser = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`
      )
      .then(res =>
        this.setState({
          list: res.data
        })
      );
  };
  componentDidMount() {
    this.getOneUser();
  }
  render() {
    return (
      <div className="posts">
        {this.state.list.map((el, key) => (
          <div key={key} className="post-card">
            <div class="card-body">
              <h5 class="card-title">{el.title}</h5>
            </div>

            <Link to={`/details/${el.id}`}>
              <button type="button" class="btn btn-primary">
                DETAILS
              </button>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
