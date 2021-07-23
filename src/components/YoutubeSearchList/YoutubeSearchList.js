import React from "react";
import PropTypes from "prop-types";

import SearchListItem from "./SearchListItem/SearchListItem";

const SearchList = (props) => <div className="col-12">{props.children}</div>;

const SearchBox = (props) => (
  <form className="mt-4 mb-2" id="searchVideos" onSubmit={props.onFormSubmit}>
    <div className="input-group">
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={props.value}
        onChange={props.onChangeInput}
      />
      <button className="btn btn-outline-secondary" type="submit">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </form>
);

class YoutubeSearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      searchValue: "",
    };

    this.handleChangeSearchValue = this.handleChangeSearchValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChangeSearchValue(event) {
    this.setState({
      searchValue: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.filterData();
    this.props.totalFound(this.state.data.length);
  }

  render() {
    return (
      <>
        <SearchBox
          value={this.state.searchValue}
          onFormSubmit={this.handleSubmit}
          onChangeInput={this.handleChangeSearchValue}
        />
        <SearchList>
          {this.state.data.map((each) => (
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
            />
          ))}
        </SearchList>
      </>
    );
  }
}

YoutubeSearchList.propTypes = {
  data: PropTypes.array,
};

YoutubeSearchList.defaultProps = {};

export default YoutubeSearchList;
