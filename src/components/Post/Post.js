import React from "react";
import PropTypes from "prop-types";

import PostContent from "./PostContent/PostContent";

const PostHeader = (props) => (
  <div className="row">
    <div className="col d-flex">
      <div className="flex-shrink-0 align-self-center">
        {/* Conditional rendering on profileImg */}
        {props.profileImg ? (
          <img
            src={props.profileImg}
            alt="Profile Image"
            className="rounded-circle"
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
  constructor(props){
    super(props)
    this.state = {
      liked: this.props.liked
    }
  }

  handleToggleLike(){
    if (this.state.liked) {
      this.setState({
        liked: false
      })
    } else {
      this.setState({
        liked: true
      })
    }
  }

  render() {
    return <div className="row mt-2">
    <div className="col">
      <form>
        <input
          type="checkbox"
          className="btn-check"
          id="like-unlike"
          autocomplete="off"
          checked={this.state.liked}
        />
        <label className="btn btn-outline-primary" for="like-unlike" onClick={this.handleToggleLike.bind(this)}>
          <i className="far fa-thumbs-up"></i>
          &nbsp;
          {this.state.liked ? "Liked" : "Like"}
        </label>
      </form>
    </div>
  </div>
  }
}

const PostArea = (props) => (
  <div
    className="container bg-light border border-secondary rounded-3 my-2 p-3"
    id="posts"
  >
    {props.children}
  </div>
);

class Post extends React.Component {
  render() {
    return (
      <PostArea>
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
        <ToggleLike liked={this.props.liked} />
      </PostArea>
    );
  }
}

Post.propTypes = {
  profileImg: PropTypes.string,
  author: PropTypes.string,
  datetime: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  hasThumbnail: PropTypes.bool,
  thumbnailSrc: PropTypes.string,
  liked: PropTypes.bool
};

// Post.defaultProps = {
//   hasThumbnail: true
// };

Post.defaultProps = {
  profileImg: "",
  author: "Author",
  datetime: "Fri Jul 16 2021 01:49",
  title: "Post Title",
  text: "Post Text",
  hasThumbnail: true,
  thumbnailSrc: "",
  liked: false
};

export default Post;
