var dbutils_1 = require('../utils/dbutils');
var dbObj = new dbutils_1["default"]();
dbObj.createUser("nithin", "nithin");
dbObj.fetchUserInfo("nithin").then(function (data) {
    console.log(data);
});
