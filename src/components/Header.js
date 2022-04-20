import React from 'react';
import 'animate.css';

const Header = (props) => {
    return (
        // title wrapper
        <div id="title-container">
            {/* fixed white logo */}
            <img id='logo-white' src='/assets/logo-white.svg' alt='Rooster Grin logo in white.' />
            <header>
                {/* animated title - used CSS Animate classes */}
                <h1 className='hero-title animate__animated animate__fadeInDown' id='welcome'>Welcome To</h1><h1 className='animate__animated animate__fadeInDown' id='rooster'> Rooster Grin</h1>
            </header>
            <main>
                {/* button links to the next section */}
                <a href='#hikers'><button id='hero-button'>Explore</button></a>
            </main>
        </div>
    )
}

export default Header;