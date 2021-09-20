import "./index.css";
function Commentsession(props) {
	console.log({ props });

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-1 col-sm-1 col-xl-1">
					<img
						className="rounded-circle"
						alt="100x100"
						src={props.data.image}
						data-holder-rendered="true"
						style={{ width: "40px" }}
					></img>
				</div>
				<div className="col-md-11 col-sm-11 col-xl-11">
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
		</div>
	);
}
export default Commentsession;
