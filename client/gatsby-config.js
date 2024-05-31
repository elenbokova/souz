/**
 * @type {import('gatsby').GatsbyConfig}
 */

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  developMiddleware: app => {
    app.use(
      "/sendmail",
      createProxyMiddleware({
        target: "http://localhost:8000",
        changeOrigin: true,
      })
    );
  },
  siteMetadata: {
    title: "souz",
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
    // {
    //   resolve: `gatsby-plugin-netlify-functions`,
    //   options: {
    //     functionsSrc: `./src/netlify/functions`,
    //     functionsOutput: `./public/functions`,
    //   },
    // },
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