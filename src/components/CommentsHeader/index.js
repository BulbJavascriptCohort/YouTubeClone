// import picture from  "./picture.jpeg";
import "./index.css";
function CommentsHeader() {
	return (
		<div id="head">
            <div className="container">
            <h5>Kids Crashing Their Dads Interviews!</h5>
			<div className="body">
				<div className="body1">
					<span>10,892,893 . views Jun 16, 2019</span>
				</div>

				<div className="body2">
					<div>111k</div>
					<div>111k</div>
					<div>Share</div>
					<div>Save</div>
				</div>
			</div>
			<hr />
			<div className="head2">
				<div className="body3"></div>
				<div className="header">
					<div className="body4">
						<h4>NFL Rush</h4>
						<p>
							<span>176K subscribers</span>
						</p>
					</div>
                    <button type="button" class="btn btn-outline-warning"   style={{'backgroundColor':"red","color":"white", "fontWeight":"bolder"}}> SUBSCRIBE</button>
				</div>
                <p>Kids crashing their NFL dads interviews.</p>
                <p>Subscribe to NFL Rush!</p>
                <a href="/">SHOW MORE</a>
                <hr />
                <div className="sort">
                <span>1,648 Comments</span>
                <span style={{"fontWeight":"Bolder"}}>SORT BY</span>
                   
                </div>
                <form action="
                ">
                    <input type="text" placeholder="Add a public comment..." />
                </form>
                
			</div>
            </div>
			
		</div>
	);
}
export default CommentsHeader;
