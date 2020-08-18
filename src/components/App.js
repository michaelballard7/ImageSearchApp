import React from 'react';
import SearchBar from './SearchBar.js';
import unsplashApi from '../api_config/unsplash.js'
import ImageList from './ImageList.js'


class  App extends React.Component {

	state = {
		imageList: []
	}

	searchSubmitHandler = async (term) => {
		const response = await unsplashApi.get('/search/photos', { params: {query: term, per_page:20} });

		this.setState({imageList:response.data.results})
	}

	render(){
		
		return (
			<div className="ui container" style={{marginTop:"2em"}}>
				<SearchBar  searchTermHandler={this.searchSubmitHandler}/>
				<ImageList images={this.state.imageList} />
			</div>	
		)
	}
}


export default App;


