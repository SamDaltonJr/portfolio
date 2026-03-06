import React from 'react';

/**
 * A video component that plays, pauses at the end for a specified delay,
 * then loops back to the beginning.
 */
export default class DelayedLoopVideo extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.timeoutId = null;
  }

  componentDidMount() {
    const video = this.videoRef.current;
    if (video) {
      video.addEventListener('ended', this.handleEnded);
      // Set initial start time if provided
      const { startTime = 0 } = this.props;
      if (startTime > 0) {
        video.currentTime = startTime;
      }
    }
  }

  componentWillUnmount() {
    const video = this.videoRef.current;
    if (video) {
      video.removeEventListener('ended', this.handleEnded);
    }
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleEnded = () => {
    const { delay = 5000, startTime = 0 } = this.props;
    const video = this.videoRef.current;

    this.timeoutId = setTimeout(() => {
      if (video) {
        video.currentTime = startTime;
        video.play();
      }
    }, delay);
  };

  render() {
    const { src, style, className } = this.props;

    return (
      <video
        ref={this.videoRef}
        src={src}
        autoPlay
        muted
        playsInline
        style={style}
        className={className}
      />
    );
  }
}
