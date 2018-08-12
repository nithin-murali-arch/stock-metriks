import DB from '../utils/dbutils';

let dbObj = new DB();

dbObj.createUser("nithin", "nithin");

dbObj.fetchUserInfo("nithin").then(function(data){
    console.log(data);
})
