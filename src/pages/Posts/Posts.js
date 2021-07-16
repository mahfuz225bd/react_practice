import React from "react";
import PropTypes from "prop-types";

import Post from "../../components/Post/Post";

import data from './fakeData'

const Posts = () => (
  <div>
    {data.map(each => (
      <Post
      postId={each.postId}
      profileImg={each.profileImg}
      author={each.author}
      datetime={each.datetime}
      title={each.title}
      text={each.text}
      hasThumbnail={each.hasThumbnail}
      thumbnailSrc={each.thumbnailSrc}
      liked={each.liked}
    />
    ))}
  </div>
);

Posts.propTypes = {};

Posts.defaultProps = {};

export default Posts;
