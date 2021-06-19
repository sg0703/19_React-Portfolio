import React from 'react';
import Project from '../Project';

// setting up projects array to mimic database
const projects = [
    {
        name: 'React Blog (MERN)',
        description: 'React Blog is a full stack Mongo, Express, React and Node (MERN) application that allows users to log in with their Google accounts and post blog posts to a shared homepage. I created the React Blog to practice building a full stack MERN app with Redux, and I learned a lot!',
        image: 'https://github.com/sg0703/React_Blog/blob/main/screen1.png?raw=true',
        repo: 'https://github.com/AbnerTor/LoSiento',
        deployed: 'https://samgates.io/projects/react-blog/'    
    },
    {
        name: 'Weather App!',
        description: 'This app uses the OpenWeather API to get current weather conditions for any city that you search along with a 7 day forecast. The app also stores your past searches for future reference. Originally written using jQuery. Re-wrote the app using React.js and deployed on my portfolio site.',
        image: 'https://github.com/sg0703/Weather-React-Update/blob/master/readme/screenshot.png?raw=true',
        repo: 'https://github.com/sg0703/Weather-React-Update',
        deployed: 'https://samgates.io/projects/weather-app/'    
    },
    {
        name: 'Lo Siento',
        description: 'LoSiento is a simple language learning app that uses the power of IBM’s Watson to create flashcard lessons for practicing Spanish. The app also includes a public-facing API, allowing people to use our lessons in their own projects.',
        image: 'https://github.com/AbnerTor/LoSiento/blob/main/assets/images/screen1.png?raw=true',
        repo: 'https://github.com/sg0703/React_Blog',
        deployed: 'https://losiento.herokuapp.com/'    
    },
    {
        name: 'React Blog (MERN)',
        description: 'React Blog is a full stack Mongo, Express, React and Node (MERN) application that allows users to log in with their Google accounts and post blog posts to a shared homepage. I created the React Blog to practice building a full stack MERN app with Redux, and I learned a lot!',
        image: 'https://github.com/sg0703/React_Blog/blob/main/screen1.png?raw=true',
        repo: 'https://github.com/AbnerTor/LoSiento',
        deployed: 'https://samgates.io/projects/react-blog/'    
    },
    {
        name: 'Weather App!',
        description: 'This app uses the OpenWeather API to get current weather conditions for any city that you search along with a 7 day forecast. The app also stores your past searches for future reference. Originally written using jQuery. Re-wrote the app using React.js and deployed on my portfolio site.',
        image: 'https://github.com/sg0703/Weather-React-Update/blob/master/readme/screenshot.png?raw=true',
        repo: 'https://github.com/sg0703/Weather-React-Update',
        deployed: 'https://samgates.io/projects/weather-app/'    
    },
    {
        name: 'Lo Siento',
        description: 'LoSiento is a simple language learning app that uses the power of IBM’s Watson to create flashcard lessons for practicing Spanish. The app also includes a public-facing API, allowing people to use our lessons in their own projects.',
        image: 'https://github.com/AbnerTor/LoSiento/blob/main/assets/images/screen1.png?raw=true',
        repo: 'https://github.com/sg0703/React_Blog',
        deployed: 'https://losiento.herokuapp.com/'    
    }
]

// helper function to render project components
const renderProjects = () => {
    return projects.map((project, i) => {
        return (
            <Project project={project} key={i+Date.now()} />
        );
    });
}

// display portfolio page
const Portfolio = () => {
    return (
        <div className="row w-100 bg-light p-0 m-0" id="work">
            <div className="col-md-12 py-2" id="content-text">
                <div className="row">
                {renderProjects()}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;