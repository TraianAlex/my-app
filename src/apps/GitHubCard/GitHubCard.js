import React, { Component } from 'react';
import { Form } from './Form';
import { CardList } from './CardList';
import './GitHubCard.scss';
// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

export class GitHubCard extends Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div className="github-card">
    	  <div className="header">The GitHub Cards App</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}
