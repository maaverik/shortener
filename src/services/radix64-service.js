const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'
const CHAR_MAP = {}

ALPHABET.split('').forEach((v, i) => {  // runs only once when server boots to prepare a map for searching
    CHAR_MAP[v] = i
})

const intToRadix64 = (num) => {
    // for converting id to code
    let chars = []
    let q = num;
    while (q > 0) {
        let r = q % 64
        q = parseInt(q / 64)
        chars.push(ALPHABET.charAt(r))
    }
    return chars.reverse().join('')
}

const radix64ToInt = (str) => {
    // for converting code to id
    let chars = str.split('').reverse()
    let num = 0
    for (let i = 0; i < chars.length; i++) {
        num += CHAR_MAP[chars[i]] * Math.pow(64, i)
    }
    return num
}

module.exports = {
    intToRadix64,
    radix64ToInt
}

// console.log(radix64ToInt('xdg1_5'))
// console.log(radix64ToInt('_______'))  // get largest integer for 7 digit base 64 alphabet
// console.log(intToRadix64(35655786437))
// console.log(CHAR_MAP)
