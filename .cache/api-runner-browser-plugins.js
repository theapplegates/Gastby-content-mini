module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"#78ff78","showSpinner":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Your title","short_name":"Your title","description":"Your description","start_url":"https://example.com","background_color":"#FEFEFE","theme_color":"#212129","display":"standalone","icon":"theme-content/images/icon-512x512.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/@afuh/gatsby-theme-minimal/gatsby-browser.js'),
      options: {"plugins":[],"contentful":{"spaceId":"emgwebwgv5rc","accessToken":"WQwCTJXQDQwHQbBwxLo9MG-FkOL4Hx6F69YS0GOukLM"},"title":"Your title","description":"Your description","siteUrl":"https://example.com"},
    }]
