import React from 'react';

const Header = () => {
    return(
        <div className="jumbotron bg-light p-5 d-flex justify-content-center custom-header">
        <div className="row text-light">
            <a href="#home" className="no-decor">
                    <h1 className="col-md-12 display-4 d-flex justify-content-center text-light headerName">
                        Sam Gates
                    </h1>
            </a>
            <br />
            <h2 className="col-md-12 lead d-flex justify-content-center headerSub">Full MERN stack web developer</h2>
        </div>
    </div>
    );
}

export default Header;