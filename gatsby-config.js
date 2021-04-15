require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Mission Ridge Range & Academy DFW | Plano Gun Range`,
    description: `Mission Ridge Range & Academy in Plano, Texas is opening soon to the public! Sign up to stay updated on DFW’s premiere gun range for all shooters.`,
    author: `Mission Ridge Gun Range`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-87579201-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        // anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "missionridgedfw.com",
      },
    },
    `gatsby-plugin-react-helmet`,

    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_POST, // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    `gatsby-plugin-image`,
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mission Ridge DFW`,
        short_name: `mission-ridge`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#FF54AC`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: ["https://fonts.gstatic.com"],

        web: [
          {
            file:
              "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
            name: "Open Sans",
          },
          {
            file: "https://use.typekit.net/ujo8xej.css",
            name: "Industry",
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
