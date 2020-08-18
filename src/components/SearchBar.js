import React, { Component } from 'react';

export default class SearchBar extends Component {

	state = {
		searchInput: ''
		}
	

	onInputChange = (e) => {
		this.setState({
			searchInput: e.target.value
		})
	}

	onFormSubmit = (e) => {
		e.preventDefault()
		this.props.searchTermHandler(this.state.searchInput)
	}


	render() {
		return (
			<div className="ui segment">
				<form action="" className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label htmlFor=""> Image Search</label>
						<input value={this.state.searchInput} type="text" onChange={this.onInputChange}/>
					</div>
					
				</form>
			 
			 </div>
		);
	}
}
