const { Router } = require('express')
const { createCustomShortCode, createRandomShortCode, findLongUrl } = require('../services/url-service')

const route = Router();

/**
 * POST /api/links
 * BODY
 *      link: https://long/long/url
 *      --- optional ---
 *      code: shorter1
 */
route.post("/", async (req, res) => {
    const link = req.body.link  // must exist
    const code = req.body.code

    if (!code) {
        const url = await createRandomShortCode(link)
        return res.json(url)
    }

    try {
        const url = await createCustomShortCode(code, link)
        return res.json(url)
    } catch (e) {
        return res.status(400).json({ error: e.message })
    }
})

/**
 * GET /api/links/shorter1
 * RESPONSE
 *      https://long/long/url
 */
route.get("/:code", async (req, res) => {
    const code = req.params.code
    const url = await findLongUrl(code)

    if (url) {
        return res.json(url)
    } else {
        return res.status(404).json({ error: "No such code present" })
    }
})

module.exports = route