import "./index.css"
function Tag(){
    return (
        <section id="tag">
           <button type="button" class="btn btn-outline-info" style={{"backgroundColor": "black","color": "white"}}>All</button>
            <button type="button" class="btn btn-outline-warning">Fathers</button>
            <button type="button" class="btn btn-outline-warning">Boys</button>
           
            <button type="button" class="btn btn-outline-warning">Related items</button>
            <button type="button" class="btn btn-outline-warning">Recent</button>
        </section>
    )
}

export default Tag;