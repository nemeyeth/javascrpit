/* Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
var text = "#";
for (var text = "#"; text.length <= 7; text += "#")
console.log(text);

//FizzBuzz//
for (var number = 1; number <= 100; number++)
{
  if (number % 3 === 0) {
  console.log("Fizz")
  }
  else if (number % 5 === 0 && number % 3 != 0) {
  console.log("Buzz")
  }
  if (number % 5 === 0 && number % 3 === 0) {
    console.log("FizzBuzz")
  }
  else
  {
  console.log(number)
  }
}

/*Chess board
to zadanie zrobiłam with a little help bo nie bardzo rozumiem dlaczego w warunku if jest "+="
w tej sytuacji zamiast po prostu znaku równości i nie rozumiem tego momentu, w którym 
"łamią się" linie*/
var number = 0
var number2 = 0
var size = 8
var line = " "
for (number = 0; number < size; number++) {
  for (number2 = 0; number2 < size; number2 ++) {
		if ((number + number2) % 2 === 0) {
  			line += " "
}
		else {
  			line += "#"
}
  }
  line += "\n" //tej części nie rozumiem, dlaczego nie ma tu żadnego warunku, w którym ma występować "\n"
}
console.log(line)
