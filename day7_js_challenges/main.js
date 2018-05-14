
var prices = [33, 26, 99, 120, 12, 45];
var sum = 0;

// Your code here
var index = 0
while (index < prices.length ){
    sum += prices[index]
    index++
}
    document.write("The sum is: ", sum);

document.write("<br>" + "<br>")

let crows = 99
while (crows > 1) {
  document.write(crows + "crows on the wall. " + crows + "crows." + "<br>" + "1 fell down and became a wight." + "<br>" +
 (crows - 1) + " crows on the wall " + "<br>")
  document.write("<br>")

crows--
}
document.write("<br>" + "<br>")
if ( crows == 1){
    document.write("1 crow on the wall. 1 single crow." + "<br>" +
    "It fell down and became a wight." + "<br>" +
    "There's no one left to defend Westeros now.")
  }
