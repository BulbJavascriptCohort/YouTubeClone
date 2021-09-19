import video from "./video.mp4";
function VideoPlayer() {
	return (
		<section id="VideoPlayer">
			<video src={video}></video>
		</section>
	);
}

export default VideoPlayer;
