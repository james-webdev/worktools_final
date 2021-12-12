module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-fontawesome-css`
    },
    {
      resolve: `gatsby-plugin-styled-components`
    }
  ]
};
