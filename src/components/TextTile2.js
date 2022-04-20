import React from "react";

const TextTile2 = (props) => {
    return (
        /* tile containing text and a blurb. */ 
        < div id='text2' className = 'texttile-wrapper' >
            <h2 className="purple-text">Your health and safety matter to us.</h2>
            <p id='blurb-text'>
                Washing your hands for at least 20 seconds has been proven to reduce the number of germs, bacteria, and viruses present on the skins surface, thereby reducing your odds of becoming sick. Wash your hands often to keep yourself and others safe.
            </p>
            {/* Link leads to the next section. */}
            <a className="purple-text" href="#banner-content2"> > Find Out More</a>
        </div >
    )
}

export default TextTile2;






