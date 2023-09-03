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
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        // 'gatsby-transformer-sharp'
  ]
}
