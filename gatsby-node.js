const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          previous {
            id
          }
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              title
            }
          }
          next {
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    result.errors.forEach((e) => console.error(e.toString()));
    return Promise.reject(result.errors);
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((edge, index) => {
    const { node } = edge;
    const id = node.id;
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: node.fields.slug,
      component: `${__dirname}/src/templates/${node.frontmatter.templateKey}.tsx`,
      context: {
        id,
        previousId: edge.previous != null ? edge.previous.id : null,
        hasPrevious: edge.previous != null,
        nextId: edge.next != null ? edge.next.id : null,
        hasNext: edge.next != null,
        slug: node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
