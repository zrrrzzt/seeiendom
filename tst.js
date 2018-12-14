(async () => {
  const getDataFromSeeiendom = require('./index')
  const searchstring = '0806-60/77'
  try {
    const data = await getDataFromSeeiendom(searchstring)
    console.log(data)
  } catch (error) {
    console.error(error)
  }
})()
