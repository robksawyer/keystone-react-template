import React, { Component } from 'react';
import UserAPI from '../../api'
import Profile from './components/Profile';

export default class User extends Component {

	getUserData = () => {
		// Fire the request to get the user data from the User API
		console.log('Searching for id ' + this.props.match.params.id);
		return UserAPI.get(
			parseInt(this.props.match.params.id, 10)
		);
		return true;
	}

	render() {
		const user = this.getUserData().then(
			({id}) => {
				this.setState({id});
			});

		if (!user) {
			return <div>Sorry, but the user was not found.</div>
		}

		return (
		  <div className="container">
		    <div className="row">
		      <div className="col-sm-3">
		        <Profile id={user} />
		      </div>
		    </div>
		  </div>
		)
	}
}
