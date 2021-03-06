
// this file was generated by ./scripts/generate-web-api
import exec from './_exec'
import validate from './_validate'

export default function imopen(params, callback) {
  let ns = 'im.open'
  let err = validate(ns, params)
  if (err) {
    callback(err)
  }
  else {
    exec(ns, params, callback)
  }
}
