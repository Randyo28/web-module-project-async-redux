import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store/';
import { useEffect } from 'react';

function Beer(props) {

    const { fetchData } = props;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

    return (
        <div>
            <div>
            {props.beers.map(beer => {
                return (
                <p key={beer.id}>{beer.name}</p>
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

export default connect(mapStateToProps, {fetchData})(Beer);