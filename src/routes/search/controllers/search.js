const request = require('../../../utils/requestHelper');
const { createTransaction } = require('../../../interfaces/transaction')

module.exports = async(req, res, next) => {
  const { latitud, longitud } = req.query;
  const { user } = req

  const result = await request({ qs: {
    app_id: 'DemoAppId01082013GAL',
    app_code: 'AJKnXv84fjrb0KIHawS0Tg',
    cat:'eat-drink',
    // at: '6.2561163,-75.5957112'
    at: `${latitud},${longitud}`
  } 
});

  await createTransaction({
    userId: user._id,
    latitude: latitud,
    longitude: longitud,
    result
  })

  res.send(result);
}