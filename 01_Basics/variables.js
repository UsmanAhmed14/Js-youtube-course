// cannot be changed
const accountId = 144553;
let accountEmail = "usman@google.com";
var accountPassword = "12345";
accountCity = "Karachi";
let accountState;



// accountId = 2; changes not allowed.
accountEmail = "hc@hc.com";
accountPassword = 21212212;
accountCity = "Islamabad"; //aik variable aese bhi declare hosakta hy, be careful.

console.log(accountId);
/*
Prefer not to use VAR 
because of issue in Block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);