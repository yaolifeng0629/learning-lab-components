const has = require('has')
const getDefaultBranch = require('../../helpers/get-default-branch')

module.exports = async (context, opts) => {
  let sha

  if (!has(opts, 'sha')) {
    // Get the current "master" reference, to get the current master's sha
    const shaRes = await context.github.gitdata.getRef(context.repo({
      ref: `heads/${getDefaultBranch(context)}`
    }))
    sha = shaRes.data.object.sha
  } else {
    sha = opts.sha
  }

  const params = context.repo({ tree_sha: sha })
  if (opts.recursive) params.recursive = 1

  return context.github.gitdata.getTree(params)
}
