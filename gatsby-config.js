module.exports = {
  siteMetadata: {
    title: 'VS Code Themes',
    description: 'A list of all of my VS Code themes that I have published.',
    keywords: 'Zoko, Zoko theme, zoko, theme, dark blue theme, yellow, VS Code theme',
    twitterHandle: '@danlvovsky',
    siteURL: 'https://vscodethemes.netlify.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'vscode-themes',
        short_name: 'VS Code Themes',
        start_url: '/',
        background_color: '#020306',
        theme_color: '#101723',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
  ],
};
