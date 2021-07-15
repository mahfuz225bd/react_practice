import React from "react";
import PropTypes from "prop-types";

const Thumbnail = (props) => (
  <div className="col">
    <img
      src={props.src || "https://via.placeholder.com/300?text=Thumbnail"}
      alt=""
      className="w-100"
      style={{ height: "500px" }}
    />
  </div>
);

class PostText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textMessage: this.props.text.substring(0, 200),
      toggledMore: false
    };
  }

  handleMoreLessToggler() {
    if (!this.state.toggledMore) {
      this.setState({
        textMessage: this.props.text,
        toggledMore: true
      })
    } else {
      this.setState({
        textMessage: this.props.text.substring(0, 200),
        toggledMore: false
      })
    }
  }
  render() {
    return (
      <>
        <div className="col-12">
          <h4 className="text-center text-muted">{this.props.title}</h4>
          <p className="mb-0">
            <span>{this.state.textMessage}{this.state.textMessage.length >= 200 && '...'}</span>
            &nbsp;
            <a href="javascript:void(0)" onClick={this.handleMoreLessToggler.bind(this)}>
              {this.state.textMessage.length >= 200 ? (this.state.toggledMore ? 'Show less' : 'Learn More'): ''}
            </a>
          </p>
        </div>
      </>
    );
  }
}

const PostContentArea = (props) => <div className="row">{props.children}</div>;

function PostContent(props) {
  return (
    <PostContentArea>
      <PostText title={props.title} text={props.text} />      
      {props.hasThumbnail && <Thumbnail src={props.thumbnailSrc} />}
    </PostContentArea>
  );
}

PostContent.propTypes = {};

PostContent.defaultProps = {};

export default PostContent;
