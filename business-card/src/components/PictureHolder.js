import React from 'react';
import Picture from '../images/picture.jpg';

export default function PictureHolder(){
    return(
        <div className='picture-container'>
            <img src={Picture} alt="cardpicture" className='picture'></img>
        </div>
    )
}