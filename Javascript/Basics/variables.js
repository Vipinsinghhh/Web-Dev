const accountId = 14453   //constant variable
let accountEmail = "vs069056@gmail.com"      //unconstant variable, we can change after assigning the values
var accountPass = "12345"                    //unconstant
accountCity = "Jaipur"
let accountState;  //undefined- value is not assigned into the variable

//accountId = 2          //not allowed in js, you cant change the value of const

accountEmail = "XYZ@gmail.com"
accountPass = "919293"
accountCity = "INDORE"

console.log(accountEmail)   //for single print , if you want to print multiple thing in once use console.table([])

console.table({accountEmail, accountId, accountPass, accountCity, accountState})   //for multiple prints