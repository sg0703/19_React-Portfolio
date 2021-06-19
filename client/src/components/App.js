import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

// using JSX fragments to wrap components, otherwise...errors
const App = () => {
    return(
        <>
        <Header />
        <Navigation />
        <Footer />
        </>
    );
}

export default App;