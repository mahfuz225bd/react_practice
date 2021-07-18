import React from "react";
import PropTypes from "prop-types";

import SearchListItem from "./SearchListItem/SearchListItem";

const SearchList = (props) => (<div className="col-12">{props.children}</div>);

const SearchBox = (props) => (
  <form className="mt-4 mb-2">
    <div className="input-group">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </div>
  </form>
);

const YoutubeSearchResult = (props) => (
  <div className="container">
    <SearchBox />
    <SearchList>
      {props.data.map(each => (
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
  </div>
);

YoutubeSearchResult.propTypes = {
  data: PropTypes.object  
};

YoutubeSearchResult.defaultProps = {};

export default YoutubeSearchResult;
