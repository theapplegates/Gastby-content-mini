// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "@afuh/gatsby-theme-minimal",
      options: {
        contentful: {
          spaceId: "emgwebwgv5rc",
          accessToken: "WQwCTJXQDQwHQbBwxLo9MG-FkOL4Hx6F69YS0GOukLM"
        },
        title: "Your title",
        description: "Your description",
        siteUrl: 'https://example.com', // no trailing slash
      }
    }
  ]
}
