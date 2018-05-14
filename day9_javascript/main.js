// function reverseString(string){
//     let j = (string.length)-1;
//     let temp = 0
//     document.write(j)
//     for ( i = 0 ; i < Math.floor((string.length)/2); i ++){
//         document.write(i)
//         temp = string[i]
//         string[i] = string[j]
//         string[j] = temp;
//         j--
//         document.write(j)
//     }
//     return string;
// }

// let str = "hello"

// document.write(reverseString(str))

// function revString(str){
//     let newString = ""
//     let len = str.length - 1
//     for (i = len; i >= 0; i--){
//         newString += str[i]
//     }
//     return newString
// }

// let strin = "hello"
// document.write(revString(strin))
// document.write("<br>" + "<br>")


// function fizzBuzz(number){
//     for( i = 1; i <=number; i++){
//         if((i % 3 == 0) && (i % 5 == 0)){
//             document.write( i + " = FizzBuzz" + "<br>")
//         }
//         else if (i % 3 == 0){
//             document.write( i + " = Fizz" + "<br>")
//         }
//         else if (i % 5 == 0)
//         document.write( i + " = Buzz" + "<br>")
        
//     }
// }



// let num = 100
// fizzBuzz(num)
// document.write("<br>" + "<br>")



function pigLatin(stri){
    
    let temp = (stri[0])
    let check = true;
    let vowels = ["a", "e", "i", "o", "u"]
    for(i = 0; i < vowels.length; i++){
        if (temp == vowels[i]){
            check = false
            break;
        }
    }
    if(check === true){
        stri = stri.split("")
        stri.shift()
        stri.push("-")
        stri.push(temp)
        stri.push("ay")
    }
    stri = stri.join("")
    return stri
}





























let s = "banana"
document.write(pigLatin(s))
document.write("<br>" + "<br>")

