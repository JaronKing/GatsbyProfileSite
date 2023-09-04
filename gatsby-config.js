/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `profile`,
        siteUrl: `https://www.yourdomain.tld`,        
        siteUrl: 'https://localhost',
        name: 'Jaron',
        role: 'Software Engineer',
        bio: 'A short bio about myself.'
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-postcss`,
        {
        resolve: `gatsby-plugin-scroll-reveal`,
        options: {
            threshold: .5, // Percentage of an element's area that needs to be visible to launch animation
            once: false, // Defines if animation needs to be launched once
            disable: false, // Flag for disabling animations
            
            // Advanced Options
            selector: '[data-sal]', // Selector of the elements to be animated
            animateClassName: 'sal-animate', // Class name which triggers animation
            disabledClassName: 'sal-disabled', // Class name which defines the disabled state
            rootMargin: '0% 50%', // Corresponds to root's bounding box margin
            enterEventName: 'sal:in', // Enter event name
            exitEventName: 'sal:out', // Exit event name
        }
      }
    ]
}
