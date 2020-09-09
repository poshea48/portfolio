const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve('./src/templates/blog.js');
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fields: { slug: { regex: "/blog/" } } }
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 100
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach(({ node }, index) => {
    const next = index === posts.length - 1 ? null : posts[index + 1].node;
    const prev = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: node.fields.slug,
      component: blogPost,
      context: {
        slug: node.fields.slug,
        prev,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
