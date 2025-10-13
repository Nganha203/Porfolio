const MenuItem = (props) => {
    const {page, handleChangePage, item, index} = props
    return (
        <span onClick={() => handleChangePage(index + 1)}>
            <a className={page === index + 1 ? 'active' : ''} href="#">{item}</a>
        </span>
    )
}

export default MenuItem