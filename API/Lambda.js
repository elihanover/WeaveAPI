/*
  Lambda(params, function)
  params =
*/
class Lambda {
  constructor(params, func) {
    this.handler = "uhhh.js"
    this.params = params
    this.function = func
  }

  // return the YMLized function for serverless.yml
  yml() {
    return {
      "handler": this.handler,
      "events": [{
        "schedule": {
          "rate": "rate(1 minute)" // TODO: make vars
        }
      }]
    }
  }
}

module.exports = Lambda
