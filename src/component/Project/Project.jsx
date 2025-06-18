import './project.css'

const Project = () => {
    const projects =
        [
            '/image/iron-man.jpg',
            '/image/captain.webp',
            '/image/thor.webp'
        ]

    return <div className="project-page page">
        <div className="container">
            <div className="project-container">
                <div className="title-page">
                    <span className="square-title"></span>
                    <h1>Projects</h1>
                </div>
                <div className='content-text'>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
                <div className='cover-projects'>
                    <div className='description'>
                        {
                            projects.map((item, index) => (
                                <div className="description-project">
                                    <div className='name-project'>
                                        <div>
                                            <p><strong>Project name {index + 1}</strong></p>
                                            <p>Role title</p>
                                        </div>
                                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                    </div>
                                    <div className='image'>
                                        <img src={item} />
                                    </div>

                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Project