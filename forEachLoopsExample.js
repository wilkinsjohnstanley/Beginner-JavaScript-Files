var books = [];
var friends = ["Oscar", "Angela", "Kevin"];

//boring for loop way
// for(var i = 0; i < friends.length; i++){
//     document.write(friends[i] + "<br>")
// }

//super fun forEach way! ALl the code in curlies will happen to the array
friends.forEach(function(friend){document.write(friend + "<br>")
});
//for each "friend", line break