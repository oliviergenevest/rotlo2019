/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
 
const path = require('path');
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const evenementPage = path.resolve('src/templates/evenements.js');
    resolve(
      graphql(`
        {
        
          evenements: allDatoCmsEvenement (
            filter: {actif: {eq: true}},
            sort: {date: DESC}
           ) {
            edges {
              node {
                  slug
                  titre
                  teaser
                  visuel {
                    gatsbyImageData(width: 200, height: 150,layout:CONSTRAINED)
                  } 
              }
            }
          }

          
        }
      `).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        const projectPosts = result.data.evenements.edges;
        
        projectPosts.forEach((edge, index) => {
          const next = index === 0 ? null : projectPosts[index - 1].node;
          const prev = index === projectPosts.length - 1 ? null : projectPosts[index + 1].node;
          createPage({
            path: 'agenda/'+edge.node.slug,
            component: evenementPage,
            context: {
              slug: edge.node.slug,
              absolutePathCover: edge.node.visuel.gatsbyImageData,
              prev,
              next,
            },
          });
        });
        
        
      })
    );
  });
};

