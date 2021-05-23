const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'
const CHAR_MAP = {}

ALPHABET.split('').forEach((v, i) => {  // runs once when server boots to get a map for searching
    CHAR_MAP[v] = i
})

const int2radix64 = (num) => {
    let chars = []
    let q = num;
    while (q > 0) {
        let r = q % 64
        q = parseInt(q / 64)
        chars.push(ALPHABET.charAt(r))
    }
    return chars.reverse().join('')
}

const radix642int = (str) => {
    let chars = str.split('').reverse()
    let num = 0
    for (let i = 0; i < chars.length; i++) {
        num += CHAR_MAP[chars[i]] * Math.pow(64, i)
    }
    return num
}

module.exports = {
    int2radix64,
    radix642int
}

// console.log(radix642int('xdg1_5'))
// console.log(radix642int('_______'))  // get largest integer for 7 digit base 64 a;phabet
// console.log(int2radix64(35655786437))
// console.log(CHAR_MAP)