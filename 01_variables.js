const accountId = 12345;
let accountEmail = "gourav@gmail.com";
var accountPassword = "1234";
accountCity = "Bangalore";
let accountState;

// accountId = 2;  //not allowed

accountEmail = "singh@gmail.com";
accountPassword = "4321";
accountCity = "Mumbai";

console.log(accountId);
// console.log(accountEmail);

/*
Prefer not to use var because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState
 ]);

