export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61a09923bef5152932b13cd2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2vqv298r',
                  apiId: 'f91f3d40-433b-4d82-8bcf-c72fa736635c'
                },
                {
                  buildHookId: '61a099230d3ba613a4f287c2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-h9cea3mg',
                  apiId: '5f6f05cc-6bbb-4b4a-972b-b44bbf2dbaab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/digitella/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-h9cea3mg.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
