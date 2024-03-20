#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let calculator = await inquirer.prompt([
    {
        type:"number",
        name:"num1",
        message:"Enter First Number Here: "
    }, 
    {
        type:"number",
        name:"num2",
        message:"Enter second Number Here: "
    },
    {
        type:"list",
        name:"operator",
        choices:["Addition" , "Subtraction" , "Multiplication" , "Division" , "Exponent" , "Module"],
        message:"Select Your Operator: "
    },
 
])
let {num1,num2,operator}=calculator

if(num1 && num2 && operator){
    let ans:number=0;
    if(operator === 'Addition'){
        ans = num1+num2;
    }
    else if(operator === "Subtraction"){
        ans = num1-num2
    }
    else if(operator === 'Multiplication'){
        ans = num1*num2
    }
    else if(operator === 'Division'){
        ans = num1/num2
    }
    else if(operator === 'Exponent'){
        ans = num1**num2
    }
    else if(operator === 'Module'){
        ans = num1%num2
    }
    console.log(chalk.green("Your Enter",num1,operator,num2,"And The Answer Is",ans));
    
}


else{
    console.log(chalk.red("Please Inter Valid Input"));
    
}



