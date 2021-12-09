import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import you1 from "../assets/you1.PNG";
import you2 from "../assets/you2.PNG";
import you3 from "../assets/you3.PNG";
import you4 from "../assets/you4.PNG";

class VideoGallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showIndex: false,
			showBullets: false,
			infinite: true,
			showThumbnails: true,
			showFullscreenButton: false,
			showGalleryFullscreenButton: true,
			showPlayButton: false,
			showGalleryPlayButton: true,
			showNav: true,
			isRTL: false,
			slideDuration: 450,
			slideInterval: 2000,
			slideOnThumbnailOver: false,
			thumbnailPosition: "bottom",
			showVideo: {},
			useWindowKeyDown: true,
		};

		const {
			data: {
				page: { video },
			},
		} = this.props;

		function get_youtube_thumbnail(url, quality) {
			if (url) {
				var video_id, thumbnail, result;
				if ((result = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/))) {
					video_id = result.pop();
				} else if ((result = url.match(/youtu.be\/(.{11})/))) {
					video_id = result.pop();
				}

				if (video_id) {
					if (typeof quality == "undefined") {
						quality = "high";
					}

					var quality_key = "maxresdefault"; // Max quality
					if (quality == "low") {
						quality_key = "sddefault";
					} else if (quality == "medium") {
						quality_key = "mqdefault";
					} else if (quality == "high") {
						quality_key = "hqdefault";
					}

					var thumbnail =
						"http://img.youtube.com/vi/" +
						video_id +
						"/" +
						quality_key +
						".jpg";
					return thumbnail;
				}
			}
			return false;
		}

		let madeData = video.map((prev, i) => {
			return {
				thumbnail: get_youtube_thumbnail(prev, "high"),
				original: get_youtube_thumbnail(prev, "high"),
				embedUrl: prev,
				description: "Render custom slides within the gallery",
				renderItem: this._renderVideo.bind(this),
			};
		});

		this.images = [...madeData].concat(this._getStaticImages());

		this.images = [
			{
				thumbnail: `http://i3.ytimg.com/vi/MQ7XpV6jqKw/maxresdefault.jpg`,
				original: you1,
				embedUrl: video[0],
				description: "Render custom slides within the gallery",
				renderItem: this._renderVideo.bind(this),
			},
			{
				thumbnail: `http://i3.ytimg.com/vi/tfiNYs9mxbc/maxresdefault.jpg`,
				original: you2,
				embedUrl: video[1],
				description: "Render custom slides within the gallery",
				renderItem: this._renderVideo.bind(this),
			},
			{
				thumbnail: `http://i3.ytimg.com/vi/TaUU-rV2uIM/maxresdefault.jpg`,
				original: you3,
				embedUrl: video[2],
				description: "Render custom slides within the gallery",
				renderItem: this._renderVideo.bind(this),
			},
			{
				thumbnail: `http://i3.ytimg.com/vi/kVxOp_Ar_F0/maxresdefault.jpg`,
				original: you4,
				embedUrl: video[3],
				description: "Render custom slides within the gallery",
				renderItem: this._renderVideo.bind(this),
			},
		].concat(this._getStaticImages());
	}

	_onImageClick(event) {
		console.debug(
			"clicked on image",
			event.target,
			"at index",
			this._imageGallery.getCurrentIndex()
		);
	}

	_onImageLoad(event) {
		console.debug("loaded image", event.target.src);
	}

	_onSlide(index) {
		this._resetVideo();
		console.debug("slid to index", index);
	}

	_onPause(index) {
		console.debug("paused on index", index);
	}

	_onScreenChange(fullScreenElement) {
		console.debug("isFullScreen?", !!fullScreenElement);
	}

	_onPlay(index) {
		console.debug("playing from index", index);
	}

	_handleInputChange(state, event) {
		this.setState({ [state]: event.target.value });
	}

	_handleCheckboxChange(state, event) {
		this.setState({ [state]: event.target.checked });
	}

	_handleThumbnailPositionChange(event) {
		this.setState({ thumbnailPosition: event.target.value });
	}

	_getStaticImages() {
		let images = [];
		for (let i = 2; i < 2; i++) {
			images.push({
				original: `http://i3.ytimg.com/vi/Stld64YM-qw/maxresdefault.jpg`,
				thumbnail: `http://i3.ytimg.com/vi/Stld64YM-qw/maxresdefault.jpg`,
			});
		}

		return images;
	}

	_resetVideo() {
		this.setState({ showVideo: {} });

		if (this.state.showPlayButton) {
			this.setState({ showGalleryPlayButton: true });
		}

		if (this.state.showFullscreenButton) {
			this.setState({ showGalleryFullscreenButton: true });
		}
	}

	_toggleShowVideo(url) {
		this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
		this.setState({
			showVideo: this.state.showVideo,
		});

		if (this.state.showVideo[url]) {
			if (this.state.showPlayButton) {
				this.setState({ showGalleryPlayButton: false });
			}

			if (this.state.showFullscreenButton) {
				this.setState({ showGalleryFullscreenButton: false });
			}
		}
	}

	_renderVideo(item) {
		return (
			<div>
				{this.state.showVideo[item.embedUrl] ? (
					<div className="video-wrapper">
						<a
							className="close-video"
							onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
						></a>
						<iframe
							className="videoIframe"
							src={item.embedUrl + "?autoplay=1&mute=1"}
							frameBorder="0"
							allowFullScreen
						></iframe>
					</div>
				) : (
					<a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
						<div className="play-button"></div>
						<img className="image-gallery-image" src={item.original} />
						{item.description && (
							<span
								className="image-gallery-description"
								style={{ right: "0", left: "initial" }}
							>
								{item.description}
							</span>
						)}
					</a>
				)}
			</div>
		);
	}

	render() {
		return (
			<section className="app">
				<ImageGallery
					ref={(i) => (this._imageGallery = i)}
					items={this.images}
					lazyLoad={false}
					onClick={this._onImageClick.bind(this)}
					onImageLoad={this._onImageLoad}
					onSlide={this._onSlide.bind(this)}
					onPause={this._onPause.bind(this)}
					onScreenChange={this._onScreenChange.bind(this)}
					onPlay={this._onPlay.bind(this)}
					infinite={this.state.infinite}
					showBullets={this.state.showBullets}
					showFullscreenButton={
						this.state.showFullscreenButton &&
						this.state.showGalleryFullscreenButton
					}
					showPlayButton={
						this.state.showPlayButton && this.state.showGalleryPlayButton
					}
					showThumbnails={this.state.showThumbnails}
					showIndex={this.state.showIndex}
					showNav={this.state.showNav}
					isRTL={this.state.isRTL}
					thumbnailPosition={this.state.thumbnailPosition}
					slideDuration={parseInt(this.state.slideDuration)}
					slideInterval={parseInt(this.state.slideInterval)}
					slideOnThumbnailOver={this.state.slideOnThumbnailOver}
					additionalClass="app-image-gallery"
					useWindowKeyDown={this.state.useWindowKeyDown}
				/>
			</section>
		);
	}
}

export default VideoGallery;
