(async () => {
  const getDataFromSeeiendom = require('./index')
  const searchstring = '3807-60/38'
  try {
    const data = await getDataFromSeeiendom(searchstring)
    console.log(data)
  } catch (error) {
    console.error(error)
  }
})()
