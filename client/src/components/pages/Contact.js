import React from 'react';

const Contact = () => {
    return (
        <div className="row w-100 m-0 p-0" id="contact">
        <div className="col-md-12 py-3">
            <div className="row">
                <div className="col-lg-3 ml-auto text-center mb-lg-0">
                    <i className="bi bi-telephone-fill fa-3x mb-3 text-muted size3rem"></i>
                    <div>919-815-0639</div>
                </div>
                <div className="col-lg-3 mr-auto text-center">
                    <i className="bi bi-envelope-fill fa-3x mb-3 text-muted size3rem"></i>
                    <a className="d-block" href="mailto:sam.j.gates@gmail.com">Sam.J.Gates@gmail.com</a>
                </div>
                <div className="col-lg-3 mr-auto text-center">
                    <i className="bi bi-linkedin fa-3x mb-3 text-muted size3rem"></i>
                    <p><a href="https://www.linkedin.com/in/sam-gates-8413371b9/" target="_blank" rel="noreferrer">LinkedIn Profile</a></p>
                </div>
                <div className="col-lg-3 mr-auto text-center">
                    <i className="bi bi-github fa-3x mb-3 text-muted size3rem"></i>
                    <p><a href="https://github.com/sg0703" target="_blank" rel="noreferrer">GitHub Profile</a></p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Contact;