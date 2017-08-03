import axios from 'axios';

const BASE_URL = '/api/v1';

// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const UserAPI = {
  all: function() {
    return axios.get(`${BASE_URL}/users`)
                .then(
                  (res) => ({
                    users: res.data.users
                  })
                )
  },
  get: function(id) {
    const isUser = p => p.id === id;
    console.log('isUser: ' + isUser);
    return axios.get(`${BASE_URL}/users/${id}`)
                .then(
                  (res) => ({
                    user: res.data.user
                  })
                )
  }
}

export default UserAPI
