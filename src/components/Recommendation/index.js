import RecommendedVideo from "../RecommendedVideos";
import Tag from "../Tag";
import suggestion from "../../data/suggestion.data";

const Recommendations = () => {

    const recommendedVideosElements = []
    for(let i = 0; i < suggestion.length; i++){
        recommendedVideosElements.push(<RecommendedVideo suggest={suggestion[i]} key={i}/>)
    }

    return(
        <section>
            <Tag />
            {recommendedVideosElements}
        </section>
    )
}

export default Recommendations;