import React, { Component } from 'react';
import axios from 'axios';

export class Form extends Component {
  state = { userName: '' };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await axios.get(
      `https://api.github.com/users/${this.state.userName}`,
    );
    this.props.onSubmit(data);
    this.setState({ userName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={({ target }) => this.setState({ userName: target.value })}
          placeholder="GitHub username"
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}
