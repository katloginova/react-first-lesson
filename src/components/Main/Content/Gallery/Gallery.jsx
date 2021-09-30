import React from "react";
import photo from '../../../../images/sea.jpg';
import './style.css';


class Gallery extends React.Component{
    render(){
        return(
            <div className='gallery'>
                <img className='gallery__img' src={photo} alt="photo" />
                <img className='gallery__img' src={photo} alt="photo" />
                <img className='gallery__img' src={photo} alt="photo" />
                <img className='gallery__img' src={photo} alt="photo" />
            </div>
        )
    }
}

export default Gallery;