import React from 'react';
import { connect, useSelector } from 'react-redux';
import { fetchData } from '../store';
import { useEffect } from 'react';

import Beer from './Beer'

function Beers(props) {

  const {beers, loading} = useSelector((state) => state)

    const { fetchData } = props;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

    return (
      <div className="background-image">
              {loading ? <h1 className="loading">Loading....</h1> : null }
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