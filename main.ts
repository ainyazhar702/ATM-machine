import inquirer from "inquirer";

// Initialize user balance and pin code
let myBalance = 500000;
let myPin : number = 2244;

// Print welcome message
console.log("Welcome to code with Ainy - ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        type: "number",
        message: "Enter your pin code:"
    }
])
if (pinAnswer.Pin === myPin){
    console.log("Pin is correct, login sucessfully!");

    // console.log(`Current Account Balance is ${myBalance}`)

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["WithDraw Ammount", "Check Balance"]
        }
    ])
    
    if(operationAns.operation === "Withdraw Ammount"){
        let amountAns = await inquirer.prompt([
            {
               name: "amount",
               type: "number",
               message: "Enter the amount to withdraw:"
            }
       ])
       if(amountAns.amount > myBalance){
        console.log("Insufficient Balance");
       }
       else{
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} Withdraw Successfully`);
        console.log(`Your Remaining Balance is: ${myBalance}`);
       }
    }  
    else if (operationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is: ${myBalance}`);
    }
}
else{
    console.log("pin is incorrect, Try Again!");
}
