const request = require('../../../utils/requestHelper');

module.exports = async(req, res, next) => {
  const { latitude, longitud } = req.query;

  const result = await request({ qs: {
    app_id: 'DemoAppId01082013GAL',
    app_code: 'AJKnXv84fjrb0KIHawS0Tg',
    cat:'eat-drink',
    // at: '6.2561163,-75.5957112'
    at: `${latitude},${longitud}`
  } 
});

  res.send(result);
}