import React from 'react';

const Footer = () => {
    return(
        <footer className="fixed-bottom navbar navbar-dark bg-dark text-light p-3 px-2 justify-content-center d-flex mt-5">
            <div className="row">
                <div className="col-lg-3 ml-auto text-center mb-lg-0">
                    <a href="https://samgates.io/">
                <i class="bi bi-keyboard-fill fa-3x mb-3 text-muted size3rem"></i>
                </a>
                </div>
                <div className="col-lg-3 mr-auto text-center">
                    <a className="d-block" href="mailto:sam.j.gates@gmail.com"><i className="bi bi-envelope-fill fa-3x mb-3 text-muted size3rem"></i></a>
                </div>
                <div className="col-lg-3 mr-auto text-center">
                <a href="https://www.linkedin.com/in/sam-gates-8413371b9/" target="_blank" rel="noreferrer"> 
                <i className="bi bi-linkedin fa-3x mb-3 text-muted size3rem"></i></a>
                </div>
                <div className="col-lg-3 mr-auto text-center">
                <a href="https://github.com/sg0703" target="_blank" rel="noreferrer">
                <i className="bi bi-github fa-3x mb-3 text-muted size3rem"></i>
                </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;