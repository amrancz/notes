module.exports = {
    siteMetadata: {
      title: `Adam Amran's notes`,
    },
    plugins: [
      {
        resolve: `gatsby-theme-andy`,
        options: {
          hideDoubleBrackets: true,
          mdxOtherwiseConfigured: true,
        },
      },
      `gatsby-plugin-postcss`,
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: ['.mdx', '.md'],
          gatsbyRemarkPlugins: [`gatsby-remark-embedder`],
        },
      },
    ],
  };