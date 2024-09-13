//                                                  TASK No 1

let firstName = "apple"

alert(firstName)

// ______________________________________

//                                              TASK No 2

let first2Name = "juaid "

alert(" hello " + first2Name + "How are You")

// -----------------------------------------------

//                                                TASK No 3

// let num1 = 3
// let num2 = 4

// alert(num1 + num2)

// ---------------------------------------------------

//                      TASK No 5

let num3 = +prompt("Plese enter first number")
let oper = prompt ("operater")
let num4 = +prompt("Plese enter second number")

if (oper === "+" ){
    alert( num3 + num4)
}
else if (oper === "*"){
    alert(num3 * num4)
} 
else if(oper === "-"){
    alert(num3 - num4)
}
else if(oper === "%"){
    alert(num3 % num4)
}
else if(oper === "/"){
    alert(num3 / num4)
}
else{
    alert(" Missing Number")
}

// ----------------------------------------------

//                                  *Math Expressions: Unfamiliar Operators*

//                                              TASK No 6

   let num5 = 10
    let num6 = 4

   alert(num5 % num6)

   num5++
   alert(num5)
   num6--
   alert(num6)


// ---------------------------------------------

//                                TASK No 7

    let hel = "Hello Word"

    alert(hel)

    // ------------------------------------------------

    //                          TASK No 8

    let userName = prompt("Enter your full name")
    let age = prompt("Enter your age")

    alert("Your name is " + userName + " and you are " + age + " Year old")

    // --------------------------------------------------

    //                        TASK No 9

      let num7 = prompt("Enter your Number")

      if(num7 > 0){
        alert("This is Positive Number")
      }
      else if(num7 < 0){
        alert("This is Negative Number")
      }
      else if(num7 == 0){
        alert("This is Zero")
      }
      else{
        alert("Invalid input. Please enter a valid number.")
      }

      // -----------------------------------------------

      //                                  TASK No 10

      let num8 = +prompt("Enter First number")
      let num9 = +prompt("Enter Second Number")

      if(num8 > num9){
        alert("The First number is grater the Second number")
      }
      else if(num8 < num9){
        alert("The Second number is Grater then fitst number")
      }
      else if(num8 == num9){
        alert("Both are equal")
      }
      else{
        alert("Wright correct ansower")
      }


      // -------------------------------------------

      //                            TASK No 11

      let marks = prompt("Enter Your Marks")

      if(marks <= 100 && marks >= 90){
        alert("Grade A1")
      }
      else if(marks <= 90 && marks >= 80){
        alert("Grade A")
      }
      else if(marks <= 80 && marks >= 70){
        alert("Grade B")
      }
      else if(marks <= 70 && marks >= 60){
        alert("Grade C")
      }
      else if(marks <= 60 && marks >= 50){
        alert("Grade D")
      }
      else if(marks <= 50 && marks >= 0){
        alert(" Fail")
      }
      else{
        alert("Write a correct Number")
      }

      // -----------------------------------------

      //                            TASK No 12

      let user = prompt("Enter your gmail ( khan@gmail.com ) ")
      let pass = prompt("Enter Password ( 123 )")

      if(user == "khan@gmail.com"){
        if(pass == "123"){
          alert("Welcome")
        }
        else{
          alert("Password is Wrong")
        }
      }
      else{
        alert("Email is incorrect")
      }

      // -------------------------------------------------

      // ___________________________  ARRAY ___________________________

      //                                TASK No 13

      let fruit = ["Apple" , " Banana" , " Mango" , " Gawawa"]
      alert(fruit)

  // ---------------------------------------------------------

  //                                    TASK No 14

  let ary = []

  ary.unshift("Pinapple" , " Graps" , " Dates")
  ary.shift()

  console.log(ary)

  ary.push("Apple" , " Banana" , " Mango")
  console.log(ary)

  ary.pop()
  ary.pop()
  console.log(ary)
  
  // ___________________________ PART 2 _______________________________________

  //                            TASK No 1

  let num10 = +prompt("Enter your first number")
  let oper2 = prompt("+ , - , * / , %")
  let num11 = +prompt("Enter Second Number")

  if(oper2 == "+"){
    alert(num10 + num11)
  }
  else if(oper2 == "-"){
    alert(num10 - num11)
  }
  else if(oper2 == "*"){
    alert(num10 * num11)
  }
  else if(oper2 == "/"){
    alert(num10 / num11)
  }
  else if(oper2 == "%"){
    alert(num10 % num11)
  }
  else{
    alert("Write a correct number")
  }

  // -----------------------------------------

  //                              TASK No 2

  let user2 = prompt("Enter your name")
  let colr = prompt("Ente your favorite color name")

  alert("Hello " + user2 + " You favorate color is " + colr + "!")

  // -----------------------------------------

  //                                  TASK No 3

  let num12 = prompt("Write a number for check is it Odd or Even")

  if(num12 % 2 === 0){
    alert(num12 + " Is Even number")
  }
  else{
    alert(num12 + " Is Odd number")
  }

  // -------------------------------------

  //                                    TASK No 4

    let frot = ["Mango"  , "Apple" , "Banana" ,]

    console.log(frot)

    frot.shift()
    frot.shift()
    console.log(frot)

    frot.unshift("Pinapple" , "Gawawa")
    console.log(frot)

    frot.push("Stobry" , "elachi")
    console.log(frot)

    frot.pop()
    frot.pop()
    console.log(frot)

    // -----------------------------------------------

    //                              TASK No 5

    let num13 = prompt('What is the answer of 2 + 2')
    let isl = prompt("What is the capital of Pakistan ?")
    let pro = prompt("Is Bootstrap is Programing language ?")

    if(num13 == 4 && isl == "islamabad" && pro == "yes"){
      alert("You got 10/10")
    }
    else{
      alert("You got 10/5")
    }

    // --------------------------------

    //                                  TASK No 6

  for (let index = 0; index <= 10 ;  index++) {
 console.log(index)
  }