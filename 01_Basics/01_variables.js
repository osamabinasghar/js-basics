const accountId = 144553
let accountEmail = "obinasghar@yahoo.com"
var accountPassword = "12345"
accountCity = "Karachi"
let accountState;

// accountId = 2 // not allowed
accountEmail = "Obinasghar123@yahoo.com"
accountPassword = 2121212121
accountCity = "Lahore"

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])