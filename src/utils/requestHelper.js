const rp = require('request-promise')

const urlPlace = 'https://places.demo.api.here.com/places/v1/discover/explore'
// const urlPlace = 'https://places.demo.api.here.com/places/v1/discover/explore?at=6.2561163%2C-75.5957112&cat=eat-drink&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg'

module.exports = async ({ url = urlPlace, path = '', qs = {}, form = {}, headers = {}, method = 'GET' }) => {
  const options = {
    method,
    uri: `${url}${path}`,
    body: form,
    headers,
    json: true,
    qs
  }

  const response = await rp(options)
  return response
}