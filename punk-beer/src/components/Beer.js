import { Link, useRouteMatch } from 'react-router-dom'
// import {useDispatch} from 'react-redux';
// import { fetchSingleData } from '../store';


const Beer = (props) => {


    // const dispatch = useDispatch()

    const {name, image_url, id} = props.beer

    const {url} = useRouteMatch()

    return (
            <div className='beer-container'>
                <h2 className='beer-name'>{name}</h2>
                <Link  to={`${url}/${id}`}>
                    <img className='beer-image' src={image_url} alt='beer'/>
                </Link>
            </div>
    
    );
};

export default Beer;