function countBs(string){
  count = 0
  for (i = 0; i <= string.length; i++) {
    if (string.charAt(i) == "B") {
    count++
  
    }
    
  	}
  return count
}

function countChar(string, char) {
   count = 0
  for (i = 0; i <= string.length; i++) {
    if (string.charAt(i) == char) {
    count++
  
    }
    
  	}
  return count
}