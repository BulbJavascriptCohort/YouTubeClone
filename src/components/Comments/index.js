import Commentsession from "../Commentsesion";
import CommentsHeader from "../CommentsHeader";
import newComments from "../../data/commentsData";
function Comments(){
    
    const comment=[];
    for (let i=0; i < newComments.length; i++){
        comment.push(<Commentsession data={newComments[i]} key={i}/>)
    }

    return (
        <section id="Comments">
            <CommentsHeader/>
            {comment}
        </section>
    )
}

export default Comments;