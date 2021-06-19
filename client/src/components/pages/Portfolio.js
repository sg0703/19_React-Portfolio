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
        name: 'Budget Tracker',
        description: 'Budget Tracker is a progressive web app that allows users to enter budget items on- and off-line. This app uses IndexedDB, a service-worker, and a web manifest to allow offline functionality. The app is deployed on Heroku and stores budget entries using MongoDB Atlas.',
        image: 'https://github.com/sg0703/18_Budget-Tracker/blob/main/readme/screen1.png?raw=true',
        repo: 'https://github.com/sg0703/18_Budget-Tracker',
        deployed: 'https://gentle-thicket-09175.herokuapp.com/'
    },
    {
        name: 'Workout Tracker',
        description: 'Fitness Tracker is a Node.js app that utilizes MongoDB Atlas to store workout and exercise data. The app allows users to add new workouts and modify existing workouts. The stats page keeps track of your workout activity. Frontend code provided. Wrote API, MongoDB code, deployed on Heroku. Uses Node, Express, MongoDB Atlas.',
        image: 'https://github.com/sg0703/17_Workout-Tracker/blob/master/assets/screen1.png?raw=true',
        repo: 'https://github.com/sg0703/17_Workout-Tracker',
        deployed: 'https://enigmatic-brook-29650.herokuapp.com/?id=60c9137b9ff78300153fb7bf'
    },
    {
        name: 'Tech Blog',
        description: 'Tech Blog is a full stack application utilizing Node.js, Express, bCrypt, Handlebars, sequelize and MySQL. Users can sign up, and once logged in have the ability to create blog posts and comment on other users posts.',
        image: 'https://github.com/sg0703/14_Tech-Blog/blob/master/assets/images/screen1.png?raw=true',
        repo: 'https://github.com/sg0703/14_Tech-Blog',
        deployed: 'https://murmuring-ridge-16904.herokuapp.com/'
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