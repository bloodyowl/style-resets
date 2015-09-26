import tape from "tape-catch"
import { button, list, input } from ".."

tape("cssResets", (test) => {
  test.equal(typeof button, "object")
  test.equal(typeof list, "object")
  test.equal(typeof input, "object")
  test.end()
})
