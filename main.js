function fizzy(num) {
 if (num / 3 !==0 && num % 5 !==0) {
   return 'Fizz'
 } else if(num / 5 && num % 3) {
   return 'Buzz'
 } else if (num / 3 && num / 5) {
   return 'FizzBuzz'
  } else {
  return 1
 }
}




module.exports = {
  fizzy,
}