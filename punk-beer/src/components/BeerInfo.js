import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'


const BeerInfo = (props) => {

    const [beerInfo, setBeerInfo] = useState({})

    const {id} = useParams()

    useEffect(() => {
      axios
      .get(`https://api.punkapi.com/v2/beers/${id}`)
      .then(res => {
          console.log(res.data[0])
          setBeerInfo(res.data[0])
      })
      .catch(err => {
          console.log(err)
      })
    }, [id]);

    const {name, image_url, abv, description, tagline} = beerInfo;

    return (
        <div>
            <h1>{name}</h1>
            <img className='beer-image' src={image_url} alt='beer'/>
            <h1>{description}</h1>
            <h1>{abv}</h1>
            <h1>{tagline}</h1>
        </div>
    );
};

export default BeerInfo;