import React from 'react';
import PropTypes from 'prop-types';
import YoutubeSearchList from '../../components/YoutubeSearchList/YoutubeSearchList';

import data from './fakeData'

const YoutubeSearchResult = () => (
  <div className="container">
    <YoutubeSearchList data={data} />
  </div>
);

YoutubeSearchResult.propTypes = {};

YoutubeSearchResult.defaultProps = {};

export default YoutubeSearchResult;