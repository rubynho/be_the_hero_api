const generateUniqueId = require('../../src/utils/generateUniqueId.js')

describe('Generate Unique ID', () => {
  it('generates an unique id', () => {
    const id = generateUniqueId()

    expect(id).toHaveLength(8)
  })
})
