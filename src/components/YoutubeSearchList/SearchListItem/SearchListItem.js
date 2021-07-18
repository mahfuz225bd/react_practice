import React from "react";
import PropTypes from "prop-types";

import styles from "./SearchListItem.module.css";

const shortNum = require("number-shortener");

const Thumbnail = (props) => (
  <a href={props.videoSrc} className="text-decoration-none">
    <div className="flex-shrink-0">
      {props.src ? (
        <img
          src={props.src}
          alt="Thumbnail Image"
          className={styles["thumbnail-img"]}
        />
      ) : (
        <img src={"https://via.placeholder.com/240"} alt="Thumbnail Image" />
      )}
    </div>
  </a>
);

const SearchItemHeader = (props) => (
  <a href={props.videoSrc} className="text-decoration-none text-dark">
    <h4>{props.title}</h4>
    <p className="text-muted">
      <span>{props.views} views</span> | <span>{props.datetime}</span>
    </p>
  </a>
);

const ChannelInfo = (props) => (
  <a href={props.src} className="d-flex text-muted text-decoration-none">
    {props.imgSrc ? (
      <img
        src={props.imgSrc}
        alt="Channel Profile Image"
        className={["rounded-circle", styles["channelProfileImg"]].join(" ")}
      />
    ) : (
      <i className="fas fa-user-circle fs-3"></i>
    )}
    <span className="align-self-center ms-1">{props.name}</span>
  </a>
);

const VideoDescription = (props) => (
  <a
    href={props.videoSrc}
    className="text-decoration-none"
    data-bs-toggle="tooltip"
    data-bs-placement="bottom"
    title="From the video description"
  >
    <p className="text-muted mt-2">{props.text}</p>
  </a>
);

const SearchListItemArea = (props) => (
  <div className="d-flex p-1">
    <Thumbnail src={props.thumbnailImgSrc} videoSrc={props.videoSrc} />
    <div className="flex-grow-1 ms-3">{props.children}</div>
  </div>
);

const SearchListItem = (props) => (
  <SearchListItemArea
    thumbnailImgSrc={props.thumbnailImgSrc}
    videoSrc={props.videoSrc}
  >
    <SearchItemHeader
      title={props.title}
      views={shortNum(props.views).toString().toUpperCase()}
      datetime={props.datetime}
      videoSrc={props.videoSrc}
    />
    <ChannelInfo
      name={props.channelName}
      src={props.channelSrc}
      imgSrc={props.channelProfileImgSrc}
    />
    <VideoDescription text={props.description} videoSrc={props.videoSrc} />
  </SearchListItemArea>
);

SearchListItem.propTypes = {
  thumbnailImgSrc: PropTypes.string,
  videoSrc: PropTypes.string,
  title: PropTypes.string,
  views: PropTypes.number,
  datetime: PropTypes.string,
  channelName: PropTypes.string,
  channelSrc: PropTypes.string,
  channelProfileImgSrc: PropTypes.string,
  description: PropTypes.string,
};

SearchListItem.defaultProps = {};

export default SearchListItem;
