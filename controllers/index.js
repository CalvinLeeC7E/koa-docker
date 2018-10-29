'use strict'

exports.test = async function (ctx) {
  ctx.body = {
    success: true,
    data: '12345',
    message: null
  }
}
