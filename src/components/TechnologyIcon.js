import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TechnologyIcon = ( {featuredImgUrl,title,index} ) => {
    return (
        <div
            className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg bg-white"
            data-sal="slide-up"
            data-sal-duration="1500"
            data-sal-delay={ index * 100 + 300 }
            data-sal-easing="ease-out-back">
            <img
                src={featuredImgUrl}
                alt={title}
                className="object-contain w-20 h-20 logo-image"/>
        </div>
    )
}

export default TechnologyIcon
