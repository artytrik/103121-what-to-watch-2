import React from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      isPlaying: props.isPlaying
    }
  }

  render() {
    const {src, poster} = this.props;

    return (
      <video
        ref={this._videoRef}
        poster={poster}
        src={src}
        width={280}
        height={175}
        muted
      />
    );
  }

  componentDidMount() {
    const {src, poster} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = poster;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {isPlaying} = this.props;
    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.src = ``;
    video.poster = ``;
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default VideoPlayer;
