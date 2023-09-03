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
        headers: [
            {
                source: `/some-path`,
                headers: [
                    {
                        key: `x-custom-header`,
                        value: `Hello World`,
                    }
                ]
            },
        ],
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ]
}
