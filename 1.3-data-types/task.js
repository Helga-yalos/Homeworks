'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    let err; 
    let rePercent = parseInt(percent);
    if (isFinite(rePercent) === false) {
        err = `Параметр "процентная ставка" содержит неправильное значение ${percent}`;
    	console.log(err);
    	return err;
    }	
    rePercent = rePercent / 1200;
    let reContribution = parseInt(contribution);
    if (isFinite(reContribution) === false) {
        err = `Параметр "первоначальный взнос" содержит неправильное значение ${contribution}`;
        console.log(err);
        return err;
    }
    let reAmount = parseInt(amount);
    if (isFinite(reAmount) === false) {
    	err = `Параметр "сумма кредита" содержит неправильное значение ${amount}`;
        console.log(err);
        return err;
    }
    let credit = reAmount - reContribution;
    let month = ((date.getFullYear() - new Date().getFullYear()) * 12);
    let payment = credit * (rePercent + rePercent / (Math.pow((1 + rePercent),month) - 1));
    let totalAmount = payment * month; 
    totalAmount = Number(totalAmount.toFixed(2));
    console.log(totalAmount);
    return totalAmount;
};

function getGreeting(name) {
	console.log(typeof(name));
    if ((name === undefined) || (name === "") || (name === null))
    	name = "Аноним";
    let greeting = `Привет, мир! Меня зовут ${name}`;
    console.log(greeting);
    return greeting;
}