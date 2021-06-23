'use strict';
// get参数去问号  转  JS对象    qs.parse(get参数去问号)
    //按照&分割成数组
    //数组中遍历  每一项按照 = 划分  
    // 设置空对象 划分后第一项为JS对象的键,第二项为值
// JS对象 转  GET参数去问号     qs.stringify(JS对象)
    // 将对象遍历 ,设置空数组,形成[键=值 ]格式,放入数组
    //join 将数组按照& 连接变成字符串
module.exports.parse =function (params){
    let obj ={}
    let arr =params.split('&')
    arr.forEach(item => {
        let tem =item.split('=')
        obj[tem[0]]= tem[1]
    });
    return obj
}
module.exports.stringify =function (obj){
    let arr = []
    for (let key in obj){
        arr.push(`${key} =${obj[key]}`)
    }
    return arr.join('&')
}