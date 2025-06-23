import { useState } from 'react'
import './header.css'
import MenuItem from './MenuItems'
import { motion, AnimatePresence } from 'framer-motion'

const Header = (props) => {
    const { page, setPage } = props
    const [isShow, setIsShow] = useState(false)
    const items_menu = ['ABOUT ME', 'RESUME', 'PROJECT', 'CONTACT']

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
                            {
                                items_menu.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        page={page}
                                        handleChangePage={handleChangePage}
                                        item={item}
                                        index={index}
                                    />
                                ))
                            }
                        </div>

                        <span onClick={handleShowMenu} className='icon-menu'>
                            <svg width="40px" height="40px" fill="none" viewBox="0 0 24 24" id="menu" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" className="icon flat-line"> <path id="primary" d="M3,12H21M9,18H21M3,6H15" style={{ fill: 'none', stroke: 'rgb(0, 80, 255)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, }} /></svg>
                        </span>
                    </div>

                    {
                        isShow && (
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    className='sidebar'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: .2 }}
                                >
                                    <span onClick={handleShowMenu} className='icon-close'>
                                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_MD"> <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                                    </span>
                                    <div className='menu-sidebar'>
                                        {
                                            items_menu.map((item, index) => (
                                                <MenuItem
                                                    key={index}
                                                    page={page}
                                                    handleChangePage={handleChangePage}
                                                    item={item}
                                                    index={index}
                                                />
                                            ))
                                        }
                                    </div>

                                </motion.div>
                            </AnimatePresence>
                        )
                    }

                </div>

            </div>

        </div>
    )
}

export default Header