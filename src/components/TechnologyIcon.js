import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TechnologyIcon = ( {featuredImgUrl} ) => {
    const image = getImage(featuredImgUrl);
    return (
        <div
            className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg bg-white"
            data-sal="slide-up"
            data-sal-duration="1500"
            data-sal-delay="300"
            data-sal-easing="ease-out-back">
            <img src={'https://i.imgur.com/removed.png'} alt="Logo" />;
        </div>
    )
}

export default TechnologyIcon
