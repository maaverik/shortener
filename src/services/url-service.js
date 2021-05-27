const { URLs } = require('../models/db')
const { intToRadix64, radix64ToInt } = require('../services/radix64-service')

const createRandomShortCode = async (link) => {
    // radix64ToInt('_______') = 4398046511103
    // 4398046511103 is the max possible integer that represents our 7 digit base 64 code
    const randomCode = parseInt(Math.random() * 4398046511103)
    const exists = await URLs.findOne({
        where: {
            id: randomCode
        }
    })

    if (exists) {
        return createRandomShortCode(link)     //get another code
    }

    return await URLs.create({
        id: randomCode,
        code: intToRadix64(randomCode),
        link: link
    })
}

const createCustomShortCode = async (code, link) => {
    // TODO: validation
    const id = radix64ToInt(code)
    const exists = await URLs.findOne({
        where: {
            id: id
        }
    })

    if (exists) {
        throw new Error(`This code [${code}] already exists`)
    }

    return await URLs.create({
        id: id,
        code: code,
        link: link
    })
}

const findLongUrl = async (code) => {
    // validate code == 7 chars long
    const id = radix64ToInt(code)
    return await URLs.findOne({
        where: {
            id: id
        }
    })
}


module.exports = {
    createCustomShortCode,
    createRandomShortCode,
    findLongUrl,
}
