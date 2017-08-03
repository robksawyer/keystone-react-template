import React, { Component } from 'react';
import UserAPI from '../../api';
import Profile from './components/Profile';

export default class User extends Component {

	getUserData = (id) => {
		// Fire the request to get the user data from the User API
		if (id){
			return UserAPI.get(
				parseInt(id, 10)
			);
		} else {
			return false;
		}
	}

	getData = () => {
		var results;
		if (this.props.match.params.id){
			console.log('Searching for a single user (' + this.props.match.params.id + ').');
			results = this.getUserData(this.props.match.params.id).then(
				(user) => {
					this.setState(user);
					return user;
				});
		}
		return results;
	}

	componentWillMount(){
		// Retrieve user data
		this.getData();
	}

	render() {
		if (this.state && !this.state.user) {
			return <div>Sorry, but no user was not found.</div>
		}
		return (
		  <div className="container">
		    <div className="row">
		      <div className="col-sm-3">
		        <Profile id={this.state.user} />
		      </div>
		    </div>
		  </div>
		)
	}
}
