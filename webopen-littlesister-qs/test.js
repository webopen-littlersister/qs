// qs.parse(get参数去问号)
// qs.stringify(对象)
const qs = require('webopen-littlesister-qs')
console.log(qs.parse('a=1&b=2'))
console.log(qs.stringify({a:1,b:2}))