import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Link from './link';

// Actions
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (
  state,
  ownProps
) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (
  dispatch,
  ownProps
) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink;