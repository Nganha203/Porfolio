import Header from "./layout/Header/Header"
import './global.css'
import AboutMe from "./component/Aboutme/AboutMe";
import Resume from "./component/Resume/Resume";
import Project from "./component/Project/Project";
import Contact from "./component/Contact/Contact";
import { useState } from "react";

function App() {
    const [page, setPage] = useState(1);
    
    return (
        <div>
            <header>
                <Header page={page} setPage={setPage}/>
            </header>
            <main>
                {page === 1 && <AboutMe />}
                {page === 2 && <Resume />}
                {page === 3 && <Project />}
                {page === 4 && <Contact />}
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default App
