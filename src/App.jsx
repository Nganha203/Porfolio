import Header from "./layout/Header/Header"
import './global.css'
import AboutMe from "./component/Aboutme/AboutMe";
import Resume from "./component/Resume/Resume";
import Project from "./component/Project/Project";
import Contact from "./component/Contact/Contact";
import { useState } from "react";
import Footer from "./layout/Footer/Footer";

function App() {
    const [page, setPage] = useState(1);
    
    return (
        <div className="wrap-page">
            <header>
                <Header page={page} setPage={setPage}/>
            </header>
            <main className="main-page">
                {page === 1 && <AboutMe />}
                {page === 2 && <Resume />}
                {page === 3 && <Project />}
                {page === 4 && <Contact />}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default App
