const { Router } = require('express')
const { findLongUrl } = require('../services/url-service')

const route = Router();

/**
 * GET /api/links/shorter1
 * RESPONSE
 *      redirect to https://long/long/url
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