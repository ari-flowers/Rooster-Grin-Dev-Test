import React from 'react';

const Footer = (props) => {
    return (
        <div className='foot-wrapper' >
            <p>Follow us:</p>
            {/* instagram logo - links to top of page since there is no instagram handle */}
            <a href="#title-container"><img className='social' src='/assets/instagram.svg' alt='Instagram logo.'/></a>
            {/* facebook logo - links to Rooster Grin FB page */}
            <a href="https://www.facebook.com/RoosterGrin/" target="_blank" rel="noopener noreferrer"><img className='social' src='/assets/facebook.svg' alt='Facebook logo.' /></a>
        </div>
    )
}

export default Footer;