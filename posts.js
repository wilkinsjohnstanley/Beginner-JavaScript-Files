//For... In = Objects
//For... Of = Arrays


const posts = {
    'id': 1, 
    'title': 'Post Title',
    'body': 'Post Body'
};

for (let post in posts){
    console.log(post);
}
//id, title, body

//
for (let post in posts){
    console.log(posts[post]);
}
//1, Post Title, Post Body

//will work for an array

const numbers = [1, 3, 5, 7, 9];
for (let number in numbers){
    console.log(number);
}
//0, 1, 2, 3, 4 (the index of each value)
//objects are not iterable, so no for of
// for (variable of iterable){

// }
for (let number of numbers){
    console.log(number); //1, 3, 5, 7, 9
}
