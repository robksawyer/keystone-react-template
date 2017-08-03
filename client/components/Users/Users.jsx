import React, { Component } from 'react';
import UserAPI from '../../api';

export default class Users extends Component {

	constructor (props) {
		super(props)
    this.state = {
      // If you use [], you loose the information of a "pending" request, as
      // you won't be able to make a distinction between a pending request,
      // and a response that returns an empty array
      users: undefined
    }
  }

	getAllUserData = () => {
		// Fire the request to get the user data from the User API
		return UserAPI.all();
	}

	getData = () => {
		console.log('Searching for all users');
		return this.getAllUserData().then(
			(res) => {
				this.setState(res);
				return res;
			});
	}

	componentDidMount(){
		// Retrieve user data
		this.getData();
	}

	render() {
		// Handle case where the response is not here yet
    if ( !this.state.users ) {
       // Note that you can return false it you want nothing to be put in the dom
       // This is also your chance to render a spinner or something...
       return <div>Loading...</div>
    }

		if (this.state.users.length === 0) {
			return (<div>Sorry, but no users were found.</div>)
		}

		return (
		  <div className="container">
		    <div className="row">
		      <div className="col-sm-3">
						<ul>
						{this.state.users.map(function(user, index){
							console.log(user);
							return <li key={user.id}><ul>
								<li>id: {user.id}</li>
								<li>isAdmin: {user.isAdmin}</li>
								<li>Name: {user.name.full}</li>
								<li>creationDate: {user.createdAt}</li>
							</ul></li>;
						})}
						</ul>
		      </div>
		    </div>
		  </div>
		)
	}
}
