import React from 'react';
import 'animate.css';

const IconTile = (props) => {
    return (
        /* tile containing 4 icons. */
        <div id='icon-tile-container'>
            {/* icons animated with Hover classes - style sheets are at the bottom of App.css */}
            <div className='icon-wrap '>
                <img className='icons hvr-grow' src='/assets/home-expertise.svg' alt='Clipboard' />
            </div>
            <div className='icon-wrap '>
                <img className='icons hvr-grow' src='/assets/home-hygiene.svg' alt='Medical face mask' />
            </div>
            <div className='icon-wrap '>
                <img className='icons hvr-grow' src='/assets/home-lab.svg' alt='Safety goggles' />
            </div>
            <div className='icon-wrap '>
                <img className='icons hvr-grow' src='/assets/home-retention.svg' alt='Calendar' />
            </div>
        </div>

    )
}

export default IconTile;