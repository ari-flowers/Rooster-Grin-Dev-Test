import React from 'react';
//The first banner with a bg of a mother and her son on a laptop
const Banner1 = (props) => {
    return (
        <div id='banner-container1'> 
            <div id='banner-content'>
            <h2 className='purple-text'>Experience Together.</h2>
            {/* button links to the next section */}
            <a href='#text2'><button id='banner-button1' className='orange-button'>Try It Free</button></a>
            </div>
        </div>
    )
}

export default Banner1;