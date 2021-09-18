function RecommendedVideo(props){
    // console.log(props.suggest.image_url);
    
  
    return (
        <section id="recommended_videos">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={props.suggest.image_url} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.suggest.title}</h5>
                        <p className="card-text">{props.suggest.channel_name}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecommendedVideo;