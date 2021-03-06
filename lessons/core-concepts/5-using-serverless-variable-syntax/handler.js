
module.exports.foo = (event, context, callback) => {
  console.log('process.env.MY_SECRET', process.env.MY_SECRET)

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      headers: {
        /* Required for CORS support to work */
        "Access-Control-Allow-Origin" : "*",
        /* Required for cookies, authorization headers with HTTPS */
        "Access-Control-Allow-Credentials" : true
      },
      message: `my super secret thing ${process.env.MY_SECRET}`
    }),
  }
  return callback(null, response)
}
