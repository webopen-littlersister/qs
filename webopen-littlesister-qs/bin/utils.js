#!/usr/bin/env node
'use strict'

//获取控制台参数
let argv = process.argv;
console.log(argv)  
// atgv 是数组  argv[2]是新增的参数
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\前端学习、练习\\exe\\开源项目\\webopen-littlesister-qs\\bin\\utils.js'
//    新增参数
//  ]

let obj ={}
    let arr =argv[2].split('&')
    arr.forEach(item => {
        let tem =item.split('=')
        obj[tem[0]]= tem[1]
    })
console.log(obj)

//git测试 :
// $ node utils.js 'a=1&b=2'
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\前端学习、练习\\exe\\开源项目\\webopen-littlesister-qs\\bin\\utils.js',
//   'a=1&b=2'
// ]
// { a: '1', b: '2' }
