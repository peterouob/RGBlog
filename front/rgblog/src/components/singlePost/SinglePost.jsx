import "./singlepost.css"

function SinglePost(){
    return(
        <>
            <div className="singlePost">
                <div className="singlePostWrapper">
                    <img src="../../../../../../blog/front/blog/public/forest.jpeg" alt="" className="singlePostImg"/>
                    <h1 className="singlePostTitle">
                        This is Single Post Title.
                        <div className="singlePostEdit">
                            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                            <i className="singlePostIcon fa-solid fa-trash"></i>
                        </div>
                    </h1>
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor">Author: <b>Peter</b></span>
                        <span className="singlePostData">1 Hour ago</span>
                    </div>
                    <p className={'singlePostDesc'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi commodi est inventore, laborum modi nemo officiis omnis optio, placeat praesentium provident, quas quibusdam quisquam repellendus sed voluptas voluptate.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias animi aperiam blanditiis commodi eveniet expedita facilis id illo, impedit nisi optio provident quidem repellat sed tenetur veniam voluptatem.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid, atque beatae culpa deserunt doloribus enim esse explicabo facilis illo illum inventore ipsa nesciunt officiis quaerat quidem quos rem rerum.
                    </p>
                </div>
            </div>
        </>
    )
}
export default SinglePost