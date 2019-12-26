import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
export default class Users extends Component {
  state = {
    list: []
  };
  getUsers = () => {
    axios.get("http://jsonplaceholder.typicode.com/users").then(res =>
      this.setState({
        list: res.data
      })
    );
  };

  componentDidMount() {
    this.getUsers();
  }
  render() {
    return (
      <div className="user">
        {this.state.list.map((el, key) => (
          <div key={key} className="card">
            <div className="card-body">
              <h5 class="card-title">{el.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{el.username}</h6>
              <h6 class="card-subtitle mb-2 text-muted">{el.email}</h6>
            </div>
            <Link className="link" to={`/posts/${el.id}`}>
              POSTS
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
