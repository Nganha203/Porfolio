import './footer.css'


const Footer = () => {
    return <div className="footer">
        <div className="container">
            <div className="footer-container">
                <div className="footer-left">
                    <p>© 2035 by Maya Nelson.</p>
                    <p>Powered and secured by <span>Wix</span></p>
                </div>
                <div className="footer-right">
                    <div>
                        <p className='information'>Call</p>
                        <p>123-456-7890</p>
                    </div>
                    <div>
                        <p className='information'>Write</p>
                        <p>info@mysite.com</p>
                    </div>
                    <div>
                        <p className='information'>Follow</p>
                        <div className='icon-group'>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Footer