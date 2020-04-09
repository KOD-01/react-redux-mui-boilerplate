import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

const Link = ({ Component, push, path }) => {
  return (
    <div onClick={() => push(path)}>
      <Component />
    </div>
  );
};

Link.propTypes = {
  Component: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    push: path => dispatch(push(path)),
  };
};

export default connect(null, mapDispatchToProps)(Link);
