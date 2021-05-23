const { URLs } = require('../models/db')
const { int2radix64, radix642int } = require('../services/radix64-service')

const createRandomShortCode = async (link) => {
    const genCode = parseInt(Math.random() * 9999999999999)   // 13 digits to represent 7 digit base 64 code
    const exists = await URLs.findOne({
        where: {
            id: genCode
        }
    })

    if (exists) {
        return createRandomShortCode(link)     //get another code
    }

    return await URLs.create({
        id: genCode,
        code: int2radix64(genCode),
        link: link
    })
}

const createCustomShortCode = async (code, link) => {
    const id = radix642int(code)
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
    const id = radix642int(code)
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
