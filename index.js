
const { createClient } = require('@sanity/client')

module.exports = async (
  job,
  settings,
  {
    input,
    params,
    document,
    fieldName,
    value,
  },
  type
) => {

  // make a Sanity client
  const client = createClient(params)

  // patch the new asset into the field
  await client.patch(document)
    .set({
      [fieldName]: value
    })
    .commit()

}

