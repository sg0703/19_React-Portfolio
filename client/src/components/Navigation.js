import React, { useState } from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const Navigation = () => {
    const [page, setPage] = useState('');

    // render pages based on what user selected
    const showPage = () => {
        switch(page) {
            case 'about':
                return <About />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            default: 
                return <About />;
        }
    }

    return (
        <div className="page_container">
            <nav className="navbar navbar-dark bg-dark p-1 px-2 d-flex justify-content-center">
            <a 
                className={page === 'about' ? 'highlight navbar-brand' : 'navbar-brand'} 
                href="#about" 
                onClick={() => setPage('about')}
            >
            About Me
            </a>  
            <a 
                className={page === 'portfolio' ? 'highlight navbar-brand' : 'navbar-brand'} href="#portfolio" 
                onClick={() => setPage('portfolio')}
            >
            Portfolio
            </a>  
            <a 
                className={page === 'contact' ? 'highlight navbar-brand' : 'navbar-brand'} href="#contact" 
                onClick={() => setPage('contact')}
            >
            Contact
            </a>  
            <a className="navbar-brand" href="https://samgates.io/assets/Sam_Gates_Resume.pdf"  target="_blank" rel="noreferrer">Resume</a> 
            </nav>
        {showPage()}
        </div>
    );
}

export default Navigation;