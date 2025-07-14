function checkinput1() {
    let num1 = document.getElementById("userinput1").value;

    if (num1.trim() === "") {
        document.getElementById("output1").innerText = "Please enter a Number"
        return;
    }

    if (isNaN(num1)) {
        document.getElementById("output1").innerText = "Invalid input. Only numbers allowed";
        return;
    }

    num1 = Number(num1);
    if (num1 == 0) {
        document.getElementById("output1").innerText = "0 is an Even Number";
    }
    else if (num1 == 1) {
        document.getElementById("output1").innerText = "1 is an Odd Number";
    }
    else if (num1 % 2 == 0) {
        document.getElementById("output1").innerText = `${num1} is an Even Number`;
    }
    else {
        document.getElementById("output1").innerText = `${num1} is an Odd Number`;
    }
}

let currentYear = new Date().getFullYear();
function checkinput2() {
    let num2 = document.getElementById("userinput2").value;

    if (num2.trim() === "") {
        document.getElementById("output2").innerText = "Please enter your birth year";
        return;
    }
    if (isNaN(num2)) {
        document.getElementById("output2").innerText = "Invalid input. Please enter a valid Birth Year";
        return;
    }

    num2 = Number(num2);
    let age = currentYear - num2;


    if (num2 > currentYear) {
        document.getElementById("output2").innerText = "Please enter a valid birth year";
    }
    else if (age < 18) {
        document.getElementById("output2").innerText = `You are ${age} years old. You are a minor`;
    }
    else if (age >= 18 && age <= 39) {
        document.getElementById("output2").innerText = `You are ${age} years old. You are an adult`;
    }
    else if (age >= 40 && age <= 59) {
        document.getElementById("output2").innerText = `You are ${age} years old. You are an senior adult`;
    }
    else if (age >= 60 && age <= 100) {
        document.getElementById("output2").innerText = `You are ${age} years old. You are a senior citizen`;
    }
    else {
        document.getElementById("output2").innerText = "Please enter a realistic age";
    }
}

function checkinput3() {
    let num3 = document.getElementById("userinput3").value;

    if (num3.trim() === "") {
        document.getElementById("output3").innerText = "Please enter a number";
        return;
    }

    if (isNaN(num3)) {
        document.getElementById("output3").innerText = "Invalid input. Please enter only numbers";
        return;
    }
    num3 = Number(num3)
    if (num3 <= 1) {
        document.getElementById("output3").innerText = "Please enter a number greater than 1";
        return;
    }
    else {
        document.getElementById("output3").innerText = "";
        for (let i = 1; i <= 10; i++) {
            document.getElementById("output3").innerText += `${num3}  X  ${i}  =  ${num3 * i}\n`;
        }
    }
}