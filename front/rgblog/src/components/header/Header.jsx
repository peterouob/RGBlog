import "./header.css"
function Header(){
    return (
        <>
            <div className="header">
                <div className="headerTitles">
                    <span className={'headerTitleSm'}>React & golang</span>
                    <span className={'headerTitleLg'}>Blog</span>
                </div>
                <img
                    className={'headerImg'}
                    src="../../public/1000_F_523577586_59mu5UOSSdvuppXGA8d3K2sH4AZeaLmT.jpg"
                    alt=""/>
            </div>
        </>
    )
}

export default Header