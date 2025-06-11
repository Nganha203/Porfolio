import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className='header-container'>
                    <div className="header-left">
                        <span className='square'></span>
                        <span className="name-author">
                            <a href="#">Maya Nelson</a>
                        </span>
                        <span className='slash'>
                            <svg fill="#000000" width="13px" height="13px" viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>slash</title> <path d="M3.625 27.094l9.563-26.688h2.406l-9.563 26.688h-2.406z"></path> </g></svg>
                        </span>
                        <span className="position">
                            <a href="#">PROJECT MANAGER</a>
                        </span>
                    </div>
                    <div className="header-right">
                        <span>
                            <a href="">About me</a>
                        </span>
                        <span>
                            <a href="">Resume</a>
                        </span>
                        <span>
                            <a href="">Project</a>
                        </span>
                        <span>
                            <a href="">Contact</a>
                        </span>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header