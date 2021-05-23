const { Router } = require('express')

const route = Router();

/**
 * POST /api/links
 * BODY
 *      link: http://asdfdfd/sdfsdf
 *      --- optional ---
 *      code: zxcxc
 */
route.post("/", (req, ers) => {

})

/**
 * GET /api/links/asdasd
 * RESPONSE
 *      link
 */
route.get("/:code", (req, ers) => {

})

module.exports = route