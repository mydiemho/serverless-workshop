/* Step 3. In this_file, access the newly created environment variables

    Lambda environment variables are accessible on the `process.env` object in node.

    `process.env.[YourEnvKeyName]`

    Return the environment variable in the `foo` function response
*/
module.exports.foo = (event, context, callback) => {
  console.log('process.env.PROVIDER_KEY', process.env.PROVIDER_KEY)
  /* MY_ENV_VAR_FOR_BAR will be undefined */
  console.log('process.env.BAR_KEY', process.env.BAR_KEY)
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      headers: {
        /* Required for CORS support to work */
        "Access-Control-Allow-Origin" : "*",
        /* Required for cookies, authorization headers with HTTPS */
        "Access-Control-Allow-Credentials" : true
      },
      message: process.env.PROVIDER_KEY
    }),
  }
  return callback(null, response)
}

/* Step 4. In this_file, access the newly created scoped `bar` environment variables

    `process.env.[YourEnvKeyName]`

    Return the environment variable in the `bar` function response
*/
module.exports.bar = (event, context, callback) => {
  /* both env variables will be accessible in bar */
  console.log('process.env.PROVIDER_KEY', process.env.PROVIDER_KEY)
  console.log('process.env.BAR_KEY', process.env.BAR_KEY)

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      headers: {
        /* Required for CORS support to work */
        "Access-Control-Allow-Origin" : "*",
        /* Required for cookies, authorization headers with HTTPS */
        "Access-Control-Allow-Credentials" : true
      },
      message: process.env.BAR_KEY

    }),
  }
  return callback(null, response)
}
