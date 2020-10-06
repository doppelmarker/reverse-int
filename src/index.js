module.exports = function reverse (n) {
    let numStr = (Math.abs(n) + '').split('').reverse().join('');
    return !!numStr[0] ? parseInt(numStr) : parseInt(numStr.slice(1));
}
