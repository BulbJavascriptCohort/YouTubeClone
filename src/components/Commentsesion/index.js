import "./index.css";
function Commentsession(props) {
	console.log({ props });

	return (
		<div className="container">
			<div className="row">
				<div className="head">
					<div className="head1">
						<h5>{props.data.name}</h5>
					</div>
					<div className="head1">
						<span>{props.data.time}</span>
					</div>
				</div>
				<p>{props.data.comment}</p>
			</div>
		</div>
	);
}
export default Commentsession;
