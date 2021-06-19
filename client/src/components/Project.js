import React from 'react';

const Project = ({project}) => {
    if (project) {
        return (
            <div className="col-12 col-md-4">
            <img className="card-img-top"
                src={project.image}
                alt={project.description}
            />
            <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.repo} className="btn btn-secondary m-1" target="_blank" rel="noreferrer">Repo</a>
                <a href={project.deployed} className="btn btn-secondary m-1" target="_blank" rel="noreferrer">Deployed</a>
            </div>
            </div>
        );
    }

    return null;
}

export default Project;