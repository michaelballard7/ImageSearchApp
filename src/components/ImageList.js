import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard.js'

function ImageList (props){

	let images = props.images.map( (image) => {
		return <ImageCard key={image.id} image={image}/> 
	})

	return <div className="image-list"> {images} </div>
}


export default ImageList;