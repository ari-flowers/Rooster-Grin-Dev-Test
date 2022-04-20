import React from 'react';
// The second banner with the bg of a young girl laughing
const Banner2 = (props) => {
    return (
        <div id='banner-container2'>
            {/* ghost tile for grid functionality */}
            <div id='ghost-tile'>

            </div>
            {/* banner text and button */}
            <div id='banner-content2'>
                <h2 className='purple-text'>Cover Your Yawn!</h2>
                <p>
                    Experts classify yawns into two types: A yawn that occurs on its own, which experts call spontaneous yawning, and a yawn that occurs after seeing someone else do it, which experts call contagious yawning.
                </p>
                {/* button links back to the top of the page */}
                <a href="#title-container"><button className='orange-button'>Back To Top</button></a>
            </div>
        </div>
    )
}

export default Banner2;