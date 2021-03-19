import React from 'react';
import { connect, useSelector} from 'react-redux';
import { fetchData } from '../store';
import { useEffect } from 'react';
import Loader from 'react-loader-spinner'

import Beer from './Beer'

function Beers(props) {

  const {beers, loading} = useSelector((state) => state.beers)
  

    const { fetchData } = props;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

    return (
      <div className="background-image">
              {loading ? <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /> : null }
            <div className='beers-container'>
            {beers.map(beer => {
              return (
                <Beer key={beer.id} beer={beer}/>
                )
             })}
            </div>
        </div>
    );
}

export default connect(null, {fetchData})(Beers);