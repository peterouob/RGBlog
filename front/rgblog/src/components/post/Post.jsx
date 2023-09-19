import "./post.css"

function Post(){
    return (
        <>
            <div className="post">
                <img
                    className={'postImg'}
                    src="../../public/forest.jpeg"
                    alt=""/>
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">Music</span>
                        <span className="postCat">Life</span>
                    </div>
                    <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                    <hr/>
                    <span className="postDate">1 hour ago</span>
                </div>
                <p className="postDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem beatae cupiditate dolorum eligendi error ex facilis iure libero, minima necessitatibus numquam odio, odit officia quae quasi quo sed voluptates!
                </p>
            </div>
        </>
    )
}

export default Post