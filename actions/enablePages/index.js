module.exports = async (context, opts) => {
  const { owner, repo } = context.repo()
  return context.github.request({
    method: 'POST',
    url: '/repos/:owner/:repo/pages',
    mediaType: {
      previews: ['switcheroo']
    },
    owner,
    repo,
    source: {
      branch: opts.branch || 'master',
      path: opts.path || '/'
    }
  })
}
