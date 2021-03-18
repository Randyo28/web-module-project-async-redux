import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store';
import { useEffect } from 'react';

import Beer from './Beer'

function Beers(props) {

    const { fetchData } = props;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

    return (
        <div className="background-image">
            <div className='beers-container'>
            {props.beers.map(beer => {
                return (
                <Beer key={beer.id} beer={beer}/>
                )
             })}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    beers: state.beers
    }
  }

export default connect(mapStateToProps, {fetchData})(Beers);