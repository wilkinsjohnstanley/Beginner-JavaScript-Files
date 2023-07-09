function recursiveFor(x){ //define it
    if(x <= 10){          //base case (the condition to stop the recursive loop)
        
        document.writeln("The recursions start coming and they don't stop coming"+"<br>");
        recursiveFor(x+=1); //call itself and increment each time, so the base case will be reached
    }
    
}

recursiveFor(1) //call the function with at least one parameter