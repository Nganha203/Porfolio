import { useState } from 'react'
import './header.css'

const Header = (props) => {
    const { page, setPage } = props
    const [isShow, setIsShow] = useState(false)

    const handleShowMenu = () => {
        setIsShow(!isShow)
    }
    const handleChangePage = (id) => {
        setPage(id)
        setIsShow(!isShow)
    }

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
                            <svg fill="#000000" width="20px" height="15px" viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>slash</title> <path d="M3.625 27.094l9.563-26.688h2.406l-9.563 26.688h-2.406z"></path> </g></svg>
                        </span>
                        <span className="position">
                            <a href="#">PROJECT MANAGER</a>
                        </span>
                    </div>
                    <div className="header-right">
                        <div className='menu-right'>
                            <span onClick={() => handleChangePage(1)}>
                                <a className={page === 1 ? 'active' : ''} href="#">ABOUT ME</a>
                            </span>
                            <span onClick={() => handleChangePage(2)}>
                                <a className={page === 2 ? 'active' : ''} href="#">RESUME</a>
                            </span>
                            <span onClick={() => handleChangePage(3)}>
                                <a className={page === 3 ? 'active' : ''} href="#">PROJECT</a>
                            </span>
                            <span onClick={() => handleChangePage(4)}>
                                <a className={page === 4 ? 'active' : ''} href="#">CONTACT</a>
                            </span>
                        </div>

                        <span onClick={handleShowMenu} className='icon-menu'>
                            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Alt_05"> <path id="Vector" d="M5 17H13M5 12H19M11 7H19" stroke="rgb(0, 80, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                        </span>
                    </div>
                    {
                        isShow && <div className="sidebar">
                            <span onClick={handleShowMenu} className='icon-close'>
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_MD"> <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                            </span>
                            <div className='menu-sidebar'>
                                <span onClick={() => handleChangePage(1)}>
                                    <a className={page === 1 ? 'active' : ''} href="#">About me</a>
                                </span>
                                <span onClick={() => handleChangePage(2)}>
                                    <a className={page === 2 ? 'active' : ''} href="#">Resume</a>
                                </span>
                                <span onClick={() => handleChangePage(3)}>
                                    <a className={page === 3 ? 'active' : ''} href="#">Project</a>
                                </span>
                                <span onClick={() => handleChangePage(4)}>
                                    <a className={page === 4 ? 'active' : ''} href="#">Contact</a>
                                </span>
                            </div>
                        </div>
                    }

                </div>

            </div>

        </div>
    )
}

export default Header