import React from 'react';
import { connect } from 'react-redux'

const BeerInfo = (props) => {
    const {name}= props.beers

    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
    beers: state.beers,
    }
  }

export default connect(mapStateToProps)(BeerInfo);