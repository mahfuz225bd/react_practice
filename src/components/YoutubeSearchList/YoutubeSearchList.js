import React from 'react';
import PropTypes from 'prop-types';

import styles from './YoutubeSearchList.module.css';

import SearchListItem from './SearchListItem/SearchListItem';

const SearchList = (props) => <div className="col-12">{props.children}</div>;

const SearchBox = (props) => (
  <form className="mt-4 mb-2" id="searchVideos" onSubmit={props.onSubmit}>
    <div className="input-group border border-secondary">
      <input
        className={[
          'form-control border-0 rounded-0',
          styles['form-control'],
        ].join(' ')}
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={props.value}
        onChange={props.onChangeInput}
      />
      <button className="btn" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </div>
  </form>
);

class YoutubeSearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      searchValue: '',
    };

    this.handleSearchValue = this.handleSearchValue.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  filterData() {
    if (this.state.searchValue.length > 0) {
      this.setState({
        data: this.state.data.filter(
          (eachData) =>
            eachData.title
              .toLowerCase()
              .includes(this.state.searchValue.toLowerCase()) ||
            eachData.description
              .toLowerCase()
              .includes(this.state.searchValue.toLowerCase()) ||
            eachData.channelName
              .toLowerCase()
              .includes(this.state.searchValue.toLowerCase())
        ),
      });
    } else {
      this.setState({
        data: this.props.data,
      });
    }
  }

  handleSearchValue(event) {
    this.setState({
      searchValue: event.target.value,
    });
  }

  handleSearch(event) {
    const { data } = this.state;
    event.preventDefault();

    this.filterData();

    this.props.totalFound(data.length);
  }

  render() {
    return (
      <>
        <SearchBox
          value={this.state.searchValue}
          onSubmit={this.handleSearch}
          onChangeInput={this.handleSearchValue}
        />
        <SearchList>
          {this.state.data.map((each, index) => (
            <SearchListItem
              thumbnailImgSrc={each.thumbnailImgSrc}
              videoSrc={each.videoSrc}
              title={each.title}
              views={each.views}
              datetime={each.datetime}
              channelName={each.channelName}
              channelSrc={each.channelSrc}
              channelProfileImgSrc={each.channelProfileImgSrc}
              description={each.description}
              key={index}
            />
          ))}
        </SearchList>
      </>
    );
  }
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func,
};

YoutubeSearchList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnailImgSrc: PropTypes.string.isRequired,
      videoSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
      datetime: PropTypes.string.isRequired,
      channelName: PropTypes.string.isRequired,
      channelSrc: PropTypes.string.isRequired,
      channelProfileImgSrc: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// YoutubeSearchList.defaultProps = {};

export default YoutubeSearchList;
