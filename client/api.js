import axios from 'axios';

const BASE_URL = process.env.API_URL + '/' + process.env.API_VERSION;

// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const UserAPI = {
  all: function() {
    return axios.all([
      axios.get(`${BASE_URL}/users`),
    ])
  },
  get: function(id) {
    const isUser = p => p.id === id;
    console.log('isUser: ' + isUser);
    return axios.all([
      axios.get(`${BASE_URL}/users/${id}`),
    ])
    .then(
      ([user]) => ({
        user: user.name
      })
    )
  }
}

export default UserAPI
