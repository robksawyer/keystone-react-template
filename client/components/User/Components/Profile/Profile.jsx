import React, {Component, PropTypes} from 'react';
import axios from 'axios';

const BASE_URL = process.env.API_URL;

export {getUserData};

// Handles finding the user data from Keystone API
function getUserData(id) {
  console.log(id);
  return axios.all([
    axios.get(`${BASE_URL}/users/${id}`),
  ])
  .then(([user]) => ({
    user: user.data
  }));
}

export default class Profile extends Component {
  constructor() {
    super()
    this.state = { user: {} }
  }

  getUser() {
    console.log(this.props);
    const {id} = this.props

    // Fire the request to get the user data from the Keystone API
    getUserData(id)
      .then(({id}) => {
        this.setState({id});
      });
  }

  componentWillMount() {
    this.getUser();
  }

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
