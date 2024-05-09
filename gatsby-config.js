/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `souz`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-transformer-remark", 
    "gatsby-plugin-sass", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: "src/images/icon.png"
    }
  },
  {
    resolve: 'gatsby-plugin-sharp',
    options: {
      defaults: {
        formats: ['auto', 'webp', 'avif'],
      }
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: "images",
      path: `${__dirname}/src/images/`,
    },
    // __key: "images"
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /images/
      }
    }
  }
]
};