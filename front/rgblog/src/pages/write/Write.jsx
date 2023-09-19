import "./write.css"

function Write(){
    return(
        <>
            <div className="write">
                <img className="writeImg" src="../../public/forest.jpeg" alt=""/>
                <form action="front/rgblog/src/pages/write/Write.jsx" className="writeForm">
                    <div className="writeFormGroup">
                        <label htmlFor="fileinput">
                            <i className="writeIcon fa-solid fa-plus"></i>
                        </label>
                        <input type="file" id="fileinput" style={{display:"none"}}/>
                        <input type="text" placeholder={'Title'} className={'writeInput'} autoFocus={true}/>
                    </div>
                    <div className="writeFormGroup">
                        <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                    </div>
                    <button className="writeSubmit">Publish</button>
                </form>
            </div>
        </>
    )
}

export default Write