import React from 'react';
import PropTypes from 'prop-types';
import styles from './Post.module.css';

import PostContent from './PostContent/PostContent';

const PostHeader = (props) => (
  <div className="row">
    <div className="col d-flex">
      <div className="flex-shrink-0 align-self-center">
        {/* Conditional rendering on profileImg */}
        {props.profileImg ? (
          <img
            src={props.profileImg}
            alt="Profile Image"
            className={['rounded-circle', styles['profile-img']].join(' ')}
          />
        ) : (
          <i className="fas fa-user-circle fs-1"></i>
        )}
      </div>
      <div className="flex-grow-1 ms-2">
        <p className="mb-0 fw-bold">{props.author}</p>
        <p className="mb-0 text-muted">{props.datetime}</p>
      </div>
    </div>
  </div>
);

class ToggleLike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: this.props.liked,
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleToggleLike() {
    if (this.state.liked) {
      this.setState({
        liked: false,
      });
    } else {
      this.setState({
        liked: true,
      });
    }
  }

  handleChange(event) {
    this.setState({
      liked: event.target.checked
    })
  }

  render() {
    return (
      <div className="row mt-2">
        <div className="col">
          <form id={'form-post-like-unlike#' + this.props.postId}>
            <input
              type="checkbox"
              className="btn-check"
              id={'like-unlike-post#' + this.props.postId}
              autoComplete="off"
              checked={this.state.liked}
              onChange={this.handleChange}
            />
            <label
              className="btn btn-outline-primary"
              id={'like-unlike-post#' + this.props.postId}
              onClick={this.handleToggleLike.bind(this)}
            >
              <i className="far fa-thumbs-up"></i>
              &nbsp;
              {this.state.liked ? 'Liked' : 'Like'}
            </label>
          </form>
        </div>
      </div>
    );
  }
}

const PostArea = (props) => (
  <div
    className={[
      'bg-light border border-secondary rounded-3 my-2 p-3 mx-auto',
      styles['my-container'],
    ].join(' ')}
    id={'post#' + props.postId}
  >
    {props.children}
  </div>
);

class Post extends React.Component {
  render() {
    return (
      <PostArea postId={this.props.postId}>
        <PostHeader
          profileImg={this.props.profileImg}
          author={this.props.author}
          datetime={this.props.datetime}
        />
        <PostContent
          title={this.props.title}
          text={this.props.text}
          hasThumbnail={this.props.hasThumbnail}
          thumbnailSrc={this.props.thumbnailSrc}
        />
        <ToggleLike liked={this.props.liked} postId={this.props.postId} />
      </PostArea>
    );
  }
}

Post.propTypes = {
  postId: PropTypes.string.isRequired,
  profileImg: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  hasThumbnail: PropTypes.bool.isRequired,
  thumbnailSrc: PropTypes.string,
  liked: PropTypes.bool.isRequired,
};

Post.defaultProps = {
  hasThumbnail: true,
};

export default Post;
