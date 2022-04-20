import React from "react";

const TextTile1 = (props) => {
    return (
         <div className='texttile-wrapper'>
            <h2 className="purple-text">Grow Together.</h2>
             <p>
                Oxytocin (OT) is involved in multiple social bonds, from attachment between parents and offspring to “friendships”. Dogs are an interesting species in which to investigate the link between the oxytocinergic system and social bonds since they establish preferential bonds with their own species but also with humans.
             </p>
             {/* Link leads to the next section */}
            <a className="purple-text" href="#banner-container1"> > Learn More</a>
         </div>
    )
}

export default TextTile1;