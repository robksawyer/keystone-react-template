import React, { Component } from 'react';

export default class Profile extends Component {

  state = { user: {} }

  render() {
    const {user} = this.state;
    return (
      <div>
        <section className="user border-bottom">
          <h2>{user.name}</h2>
        </section>
      </div>
    );
  }
}
