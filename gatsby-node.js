const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetHikes {
      hikes: allContentfulHike {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.hikes.nodes.forEach(hike => {
    createPage({
      path: `/hikes/${hike.slug}`,
      component: path.resolve(`src/templates/hike-template.js`),
      context: {
        slug: hike.slug,
      },
    })
  })
}
