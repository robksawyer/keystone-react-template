import React, {Component} from 'react';
import Profile from './Components/Profile';

export default class User extends Component {
	render() {
		return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Profile name={name} />
          </div>
        </div>
      </div>
		);
	}
}
