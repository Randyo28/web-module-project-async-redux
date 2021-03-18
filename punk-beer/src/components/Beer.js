import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'


const Beer = (props) => {

    const {name, image_url, id} = props.beer

    const {url} = useRouteMatch()

    return (
            <div className='beer-container'>
                <h2 className='beer-name'>{name}</h2>
                <Link to={`${url}/${id}`}>
                    <img className='beer-image' src={image_url} alt='beer'/>
                </Link>
            </div>
    
    );
};

export default Beer;