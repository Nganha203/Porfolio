import './contact.css'

const Contact = () => {
    return <div className="contact-page page">
        <div className="container">
            <div className="contact-container">
                <div className="title-page">
                    <span className="square-title"></span>
                    <h1>Contact</h1>
                </div>
                <div className='form-input'>
                    <form action="">
                        <div className='group-input'>
                            <div>
                                <label htmlFor="">First name:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Last name:</label>
                                <input type="text" />
                            </div>

                        </div>
                        <div className='group-input'>
                            <div>
                                <label htmlFor="">Phone:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Email:</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='group-input'>
                            <div>
                                <label htmlFor="">Message:</label>
                                <textarea className='input-message' type="text" />
                            </div>

                        </div>
                        <div className='submit'>
                            <input type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default Contact