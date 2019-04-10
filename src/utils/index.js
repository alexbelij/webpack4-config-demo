import css from '../css/index.scss'
import { RemUtils } from './rem.js'

RemUtils.init()

// let a = 40
//
// console.log(a)

// function getUrl(url, key, value) {
//   if (url.indexOf('?') !== -1) {
//     return url + '&' + key + '=' + value
//   } else {
//     return url + '?' + key + '=' + value
//   }
// }

// if(arr1[1]) {
//   let arr2 = arr1[1].split('&')
//   if(arr2[1]) {
//     return url+'&'+key+'='+value
//   } else {
//     return url+'?'+key+'='+value
//   }
// } else {
//   return url+'?'+key+'='+value
// }

  // var str = '0123456789'
  // console.log(str.substring(-3, 5))

  // var arr = [0, 2, 9, 4, 8, 23]

// console.log(arr.slice(0,-5))

// class QueryVal {
//   constructor() {
//     let name,value
//     let str=location.href //取得整个地址栏
//     let num=str.indexOf("?")
//     str=str.substr(num+1) //取得所有参数   stringvar.substr(start [, length ]
//
//     let arr=str.split("&") //各个参数放到数组里
//     for(let i=0;i < arr.length;i++){
//       num=arr[i].indexOf("=")
//       if(num>0){
//         name=arr[i].substring(0,num)
//         value=arr[i].substr(num+1)
//         this[name]=value
//       }
//     }
//   }
// }
//
// let aa = new QueryVal()
// console.log(aa.id)

// let arr2 = arr1[1].split('&')
// let val = ''
// arr2.map(value => {
//   let num = value.indexOf('=')
//   console.log(num)
//   if(num >= 0) {
//     let name = value.substring(0,num)
//     val = name === key ? value.substring(num+1): ''
//   }
// })
// return val
// console.log(getQueryString('app'))

// let arr = [1,4,6,3,5,1,5,7,4]
// let newArr = arr.filter((value,index,arr) => {
//   return arr.indexOf(value) === index
// })
// console.log(newArr)

