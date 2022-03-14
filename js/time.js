
var date = new Date ()
// var year = date.getFullYear()
// var month = date.getMonth()+ 1
// var dates = date.getDate()
// var day = date.getDay()
// var hour = date.getHours()
// var minute = date.getMinutes()
// var second = date.getSeconds()
// var miliSecond = date.getMilliseconds()
// var fulTIme = `${hour}:${minute}:${second}:${miliSecond}`
var milliSeconds = date.getTime()


// console.log(date)
// console.log(year)
// console.log(month)
// console.log(date)
// console.log(day)
// console.log(hour)
// console.log(minute)
// console.log(second)
// console.log(miliSecond)
// console.log(fulTIme)
console.log(new Date(milliSeconds))


function dateFormat(format){
    var date = new Date (format)
    var day = String(date.getDate()).padStart(2,0)
    var month = String(date.getMonth()+1).padStart(2,0)
    var year = date.getFullYear()
    
    return `${day}.${month}.${year}`
}

console.log(dateFormat(milliSeconds))












