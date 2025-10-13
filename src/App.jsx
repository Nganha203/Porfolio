import Header from "./layout/Header/Header"
import './global.css'
import AboutMe from "./component/Aboutme/AboutMe";
import Resume from "./component/Resume/Resume";
import Project from "./component/Project/Project";
import Contact from "./component/Contact/Contact";
import { useState } from "react";
import Footer from "./layout/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion"

function App() {
    const [page, setPage] = useState(1);

    const renderPage = () => {
        switch (page) {
            case 1: return <AboutMe />
            case 2: return <Resume />
            case 3: return <Project />
            case 4: return <Contact />
            default: return null
        }
    }

    return (
        <div className="wrap-page">
            <header>
                <Header page={page} setPage={setPage} />
            </header>
            <main className="main-page">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={page}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {renderPage()}
                    </motion.div>
                </AnimatePresence>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default App
