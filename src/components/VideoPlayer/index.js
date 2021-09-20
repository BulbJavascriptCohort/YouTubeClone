import ReactPlayer from 'react-player/youtube';
function VideoPlayer() {
	return (
		<section id="VideoPlayer">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default VideoPlayer;
