import React from 'react';

const Beer = (props) => {

    const {name, image_url} = props.beer

    return (
            <div className='beer-container'>
                <h2 className='beer-name'>{name}</h2>
                <img className='beer-image' src={image_url} alt='beer'/>
            </div>
    
    );
};

export default Beer;