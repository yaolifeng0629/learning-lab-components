module.exports = async (context, opts) => {
  const { owner, repo } = context.repo()
  return context.github.request({
    method: 'POST',
    url: '/repos/:owner/:repo/pages',
    headers: { accept: 'application/vnd.github.switcheroo-preview+json' },
    owner,
    repo,
    source: {
      branch: opts.branch || 'master',
      path: opts.path || '/'
    }
  })
}
