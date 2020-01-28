const debug = require('./')
const mockContext = require('../../tests/mockContext')

describe('debug', () => {
  let context

  beforeEach(() => {
    context = mockContext({}, {
      repos: {
        createHook: jest.fn()
      }
    })
  })

  it('sets the repo webhook for a draft course version', async () => {
    context.courseVersion.draft = true
    await debug(context, {})
    expect(context.github.repos.addHook).toHaveBeenCalled()
    expect(context.github.repos.addHook.mock.calls).toMatchSnapshot()
  })

  it('does not set the repo webhook for a non-draft course version', async () => {
    context.courseVersion.draft = false
    await debug(context, {})
    expect(context.github.repos.addHook).not.toHaveBeenCalled()
  })
})
