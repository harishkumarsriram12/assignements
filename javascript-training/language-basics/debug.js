//debugging in JavaScript
//Debugging is the process of identifying and fixing errors or issues in your code. 
//JavaScript provides several tools and techniques for debugging, including console statements, 
//breakpoints, and browser developer tools.
//It helps the developers to understand the flow of their code, identify issues, 
// and improve the overall quality of their applications.


function addNumbers(a, b) {
    return a + b;
}

const result = addNumbers(5, 10);
console.log("The result is: " + result); // Output: The result is: 15

// Break Point 
// A breakpoint is a marker that you can set in your code to pause the execution of your program 
// at a specific line.
// 1. Add a breakpoint by clicking on the line number in your code editor or browser developer tools.
// 2. Run your code in debug mode. The execution will pause at the breakpoint, 
// allowing you to inspect variables and step through the code line by line.
// 3. Use the debugging tools provided by your code editor or browser developer tools 
// to analyze the state of your program and identify any issues.

// 1. Add breakpoint before the line where you are getting the error 
// (for example, line 10 in the above code).
// 2. Run your code in debug mode. The execution will pause at the breakpoint,
// allowing you to inspect variables and step through the code line by line.
// 3. Use the debugging tools provided by your code editor or browser developer tools 
// to analyze the state of your program and identify any issues.
// 4. Choose the backend engine as "node.js" in the debug configuration settings 
// of your code editor or browser developer tools.


// Debugging Tools...

// Continue Execution
// After pausing at a breakpoint, you can continue the execution of your code by using the "Continue" button 
// in your code editor or browser developer tools. This will resume the execution of your program 
// until the next breakpoint is encountered or the program finishes executing.

// Stopping Execution
// You can stop the execution of your code at any time by using the "Stop" button in your code editor 
// or browser developer tools. This will terminate the execution of your program and allow you to make changes 
// to your code before running it again.

// Restarting Execution
// If you want to restart the execution of your code from the beginning, you can use the "Restart" button 
// in your code editor or browser developer tools. This will reset the state of your program and allow you 
// to run it again from the start.

// Step Over
// The "Step Over" feature allows you to execute the current line of code and move to the next line 
// without stepping into any function calls. This is useful when you want to skip over function calls 
// and focus on the main flow of your code.

// Step Into
// The "Step Into" feature allows you to step into a function call and debug the code inside that function. 
// This is useful when you want to investigate the behavior of a specific function and understand how it works. 

// Step Out
// The "Step Out" feature allows you to exit the current function and return to the calling function. 
// This is useful when you have stepped into a function and want to return to the main flow of your code.   
