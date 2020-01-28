module.exports = async context => {
  if (!context.courseVersion.draft) return
  return context.github.repos.createHook(context.repo({
    name: 'web',
    config: {
      url: `https://smee.io/${context.course.slug}-${context.user.login}`,
      content_type: 'json',
      // TODO: Fill in this list more intelligently
      events: ['push', 'issues', 'pull_request', 'issue_comment']
    }
  }))
}
