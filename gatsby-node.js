const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      hikes: allContentfulHike {
        edges {
          node {
            slug
          }
        }
      }
      blogs: allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.hikes.edges.forEach(({ node }) => {
    createPage({
      path: `/hikes/${node.slug}`,
      component: path.resolve(`src/templates/hike-template.js`),
      context: {
        slug: node.slug,
      },
    })
  })
  data.blogs.edges.forEach(({ node }) => {
    createPage({
      path: `/blogs/${node.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: node.slug,
      },
    })
  })
  //total posts
  const posts = data.blogs.edges
  //posts per page
  const postsPerPage = 4
  //number of pages
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `blogs/${i + 1}`,
      component: path.resolve(`src/templates/blog-list-template.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
