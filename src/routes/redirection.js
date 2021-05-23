const { Router } = require('express')
const { findLongUrl } = require('../services/url-service')

const route = Router();

/**
 * GET /api/links/asdasd
 * RESPONSE
 *      link
 */
route.get("/:code", async (req, res) => {
    const code = req.params.code
    const url = await findLongUrl(code)

    if (url) {
        return res.redirect(url.link)
    } else {
        return res.status(404).json({ error: "No such code present" })
    }
})

module.exports = route;