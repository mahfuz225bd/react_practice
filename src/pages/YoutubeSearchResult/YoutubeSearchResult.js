import React from 'react';
// import PropTypes from 'prop-types';
import YoutubeSearchList from '../../components/YoutubeSearchList/YoutubeSearchList';

import enableAllBootstrapTooltips from '../../assets/js/enableAllBootstrapTooltips';

import data from '../../assets/data/fakeYoutubeVideos';

class YoutubeSearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalFound: 0,
    };
  }

  totalFound = (records) => {
    this.setState({ totalFound: records });
  };

  handleLoad() {
    enableAllBootstrapTooltips();
  }

  render() {
    return (
      <div className="container py-3" onLoad={this.handleLoad}>
        <h2>Youtube Search with Dummy Data</h2>
        <h6>
          {this.state.totalFound > 0 &&
            this.state.totalFound !== data.length &&
            `Search Result: Total found ${this.state.totalFound}`}
        </h6>
        <YoutubeSearchList data={data} totalFound={this.totalFound} />
      </div>
    );
  }
}

// YoutubeSearchResult.propTypes = {};

// YoutubeSearchResult.defaultProps = {};

export default YoutubeSearchResult;
