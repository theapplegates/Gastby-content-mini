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
        title: "Paul Applegate | Living Life",
        description: "",
        siteUrl: 'https://affectionate-leakey-c70632.netlify.com', // no trailing slash
      }
    }
  ]
}
