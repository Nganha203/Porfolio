import './resume.css'

const Resume = () => {

    const time_experience = ['2035 - Present', '2035 - 2035']
    const time_education = ['2035 - Present', '2024 - 2025']

    return <div className="resume-page page">
        <div className="container">
            <div className="resume-container">
                <div className="title-page">
                    <span className="square-title"></span>
                    <h1>Resume</h1>
                </div>
                <div className='cover-experience'>
                    <div className='experience'>
                        <div className='group-experience'>
                            <p>Experience</p>
                            <button>DOWNLOAD CV</button>
                        </div>
                    </div>
                    <div className='description'>
                        {
                            time_experience.map((item) => (
                                <div className="description-group">
                                    <div className='time-company'>
                                        <p><strong>{item}</strong></p>
                                        <p>JOB POSITION</p>
                                        <p>Company Name</p>
                                        <p>Company Location</p>
                                    </div>
                                    <div className='content'>
                                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                                        <p>I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                    </div>

                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className='cover-education'>
                    <div className='experience'>
                        <div className='group-experience'>
                            <p>Education</p>
                        </div>
                    </div>
                    <div className='description'>
                        {
                            time_education.map((item) => (
                                <div className="description-group">
                                    <div className='time-company'>
                                        <p><strong>{item}</strong></p>
                                        <p>UNIVERSITY NAME</p>
                                        <p>Degree Level</p>
                                        <p>University Location</p>
                                    </div>
                                    <div className='content'>
                                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                                        <p>I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                    </div>

                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className='cover-skill'>
                    <div className='skills'>
                        <div>
                            <div className="title">
                                <p> <strong>Professional skillset</strong> </p>
                            </div>
                            <div className="skills-content">

                                <div>
                                    <span className='square-title'></span>
                                    <span className='text-skill'>Entrepreneurial Mindset</span>
                                </div>
                                <div>
                                    <span className='square-title'></span>
                                    <span className='text-skill'>Go-to-Market Planning</span>
                                </div>
                                <div>
                                    <span className='square-title'></span>
                                    <span className='text-skill'>Teamwork & Collaboration</span>
                                </div>
                                <div>
                                    <span className='square-title'></span>
                                    <span className='text-skill'>Digital Analytics</span>
                                </div>

                            </div>
                        </div>

                        <div>
                            <div className="title">
                                <p> <strong>Languages</strong> </p>
                            </div>
                            <div className="skills-content">

                                <div>
                                    <span className='square-title'></span>
                                    <span className='text-skill'>English (native)</span>
                                </div>
                                <div>
                                    <span className='square-title'></span>
                                    <span className='text-skill'>French (proficient)</span>
                                </div>
                                <div>
                                    <span className='square-title'></span>
                                    <span className='text-skill'>Spanish (proficient)</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

}

export default Resume