import React from 'react';

const Navigation = () => {
    return (
        <nav class="navbar navbar-dark bg-dark p-1 px-2 d-flex justify-content-center">
        <a class="navbar-brand" href="#about" >About Me</a>  
        <a class="navbar-brand" href="#work" >Portfolio</a>  
        <a class="navbar-brand" href="#contact" >Contact</a>  
        <a class="navbar-brand" href="Sam_Gates_Resume.pdf"  target="_blank">Resume</a> 
    </nav>
    );
}

export default Navigation;