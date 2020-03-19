const Joi = require('@hapi/joi')

module.exports = Joi.object({
  branch: Joi.string()
    .meta({ label: 'Branch' })
    .description('The name of the branch to enable pages on. This defaults to `master`.')
    .valid('master', 'gh-pages')
    .default('master'),
  path: Joi.string()
    .meta({ label: 'Path' })
    .description('The name of the folder that contains the pages site. This defaults to `/`.')
    .valid('/', '/docs')
    .default('/')
})
  .description('Enable GitHub Pages on the learner\'s repository ')
  .example([
    {},
    { context: 'Enable GitHub Pages on the `master` branch:' }
  ])
  .example([
    { branch: 'gh-pages' },
    { context: 'Enable GitHub Pages on the `gh-pages` branch:' }
  ])
  .example([
    {
      branch: 'master',
      path: '/docs'
    },
    { context: 'Enable GitHub Pages on the `/docs` folder of the `master` branch:' }
  ])
