const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
        allNodePages {
            edges {
                node {
                    id
                    status
                    drupal_internal__nid
                }
            }
        }

        allNodePosts(sort: {
            fields: [
              revision_timestamp
            ],
            order: DESC
          }) {
            edges {
                node {
                    id
                    path {
                        alias
                    }
                    status
                    drupal_internal__nid
                    title
                    revision_timestamp
                    relationships {
                        field_post_category {
                            id
                            drupal_internal__tid
                            name
                        }
                        field_post_image {
                            uri {
                                value
                            }
                            localFile {
                                url
                                childImageSharp {
                                    fixed(width: 350, height: 200) {
                                        src
                                        width
                                        height
                                    }
                                }
                            }
                        }
                        field_post_gallery_image {
                          localFile {
                            url
                            childImageSharp {
                              fixed(width: 480, height: 480) {
                                src
                                width
                                height
                              }
                            }
                          }
                        }
                    }
                }
            }
        }

        allTaxonomyTermCategories {
            edges {
                node {
                    id
                    name
                    drupal_internal__tid
                }
            }
        }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allNodePages, allNodePosts, allTaxonomyTermCategories } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.js`)

  const postTemplate = path.resolve(`./src/templates/post.js`)

  const categoryTemplate = path.resolve(`./src/templates/categorylist.js`)

  allNodePages.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.id}/`,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  allTaxonomyTermCategories.edges.forEach(edge => {
    createPage({
      path: `/category/${edge.node.drupal_internal__tid}/`,
      component: slash(categoryTemplate),
      context: {
        name: edge.node.name,
        id: edge.node.id,
        slug: edge.node.drupal_internal__tid
      },
    })
  })

  allNodePosts.edges.forEach((edge, index) => {
    createPage({
      path: `${edge.node.path.alias}`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
        // title: edge.node.title,
        // drupal_id: edge.node.drupal_internal__nid,
        // date: edge.node.revision_timestamp,
        prev: index === 0 ? null : allNodePosts.edges[index - 1].node,
        next: index === (allNodePosts.edges.length - 1) ? null : allNodePosts.edges[index + 1].node,
      },
    })
  })

}
