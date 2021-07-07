var numberGrid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
];
document.write(numberGrid[0][0]);
//nested loops go well will nested arrays
// for(var i = 0; i < numberGrid.length; i++){
//     for(var j = 0; j < numberGrid[i].length; j++){
//         document.write(numberGrid[i][j]);
//     }
//     document.write("<br>");
// }

//demonstrating that the inner for loop iterates completely for each iteration of the outer for loop
// for(var i = 0; i < 4; i++){
//     for(var j = 0; j < 3; j++){
//         document.write("i= " + i  + "j= " + j + "<br>");
        
//     }
// }