import React from 'react';
// import PropTypes from 'prop-types';

import Post from '../../components/Post/Post';

import data from '../../assets/data/fakePosts';

const Posts = () => (
  <div className="container py-3">
    <h2>Posts</h2>
    {data.map((each) => (
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
        key={each.postId}
      />
    ))}
  </div>
);

// Posts.propTypes = {};

// Posts.defaultProps = {};

export default Posts;
