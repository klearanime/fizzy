// unction fizzy(num) {
//  if (num % 3 ===0 && num % 5 !==0) {
//    return 'Fizz'
//  } else if(num % 5 === 0 && num % 3 !== 0) {
//    return 'Buzz'
//  } else if (num % 3 === 0 && num % 5 === 0) {
//    return 'FizzBuzz'
//   } 
//   return num
//  }f

function fizzy(num) {
  let answer = ''
  if (num % 3 === 0) {
    answer += 'Fizz'
  } if (num % 5 === 0) {
    answer += 'Buzz'
  } if (answer === '') {
    answer = num
  }
  return answer
}


module.exports = {
  fizzy,
}