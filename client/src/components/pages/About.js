import React from 'react';

const About = () => {
    return (
        <div className="row w-100 h-100 my-3" id="about">
        <div className="col-md-3 m-0 px-3">
            <img src="images/vert_headshot.png" width="100%" alt="Me leaning against a wall" />
        </div>
        <div className="col-md-9 px-5 my-2">
            <p>Full Stack MERN Developer currently completing a certificate program in Full Stack Web Development at University of North Carolina.</p>

            <p>Self-taught web developer who started coding around age eleven. Taught myself HTML, CSS, JavaScript, PHP, MySQL and other web development technologies.</p>

            <p>Returning to my dream of being a professional web developer after many years in public service. Possess a strong work ethic, leadership skills, and a dedication to learning.</p>
        </div>
        </div>
    );
}

export default About;