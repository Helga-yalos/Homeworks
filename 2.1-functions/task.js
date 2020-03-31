'use strict';

//task 1
function getSolutions(a,b,c) {
	let discriminant = ( b**2 ) - (4 * a * c);
	let x = [];
	if (discriminant < 0) {
		return {D: discriminant, roots: x};
	} else if (discriminant === 0) {
		x[0] = - ( b / (2 * a));
		return {D: discriminant, roots:[x[0]]};
	       } else {
		      x[0] = (- b + Math.sqrt(discriminant)) / ( 2*a );
		      x[1] = (- b - Math.sqrt(discriminant)) / ( 2*a );
	        	return {D: discriminant, roots: [x[0], x[1]]};
	        }
}

function showSolutionsMessage(a,b,c) {
	let result = getSolutions(a,b,c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x²+${b}x+${c}=0`);
	console.log(`Значение дискриминанта ${result.D}`);
	if (result.D < 0){
		console.log(`Уравнение не имеет вещественных корней`);
	} else if (result.D === 0){
		console.log(`Уравнение имеет один корень X₁=${result.roots[0]}`);
	} else {
		console.log(`Уравнение имеет 2 корня. X₁=${result.roots[0]}, X₂= ${result.roots[1]}`);
	}
}
//showSolutionsMessage(1,2,3);
//showSolutionsMessage(7,20,-3);
//showSolutionsMessage(2,4,2);


//task 2
function getAverageScore(data){
	//let result = {};
	let averageSum = 0; 
	let quantity = 0;
	for (let prop in data) {
		let value = getAverageMark(data[prop]);
		data[prop] = value;
		averageSum +=value;
		quantity++;
	}
	if (quantity ===0)
		data.average = 0;
	else
        data.average = averageSum / quantity;
    if (quantity >= 10) {
    	console.log("Вы задали слишком много предметов - нужно менее 10");
    } else {
    return data;
    }
}

function getAverageMark(marks){
	let sum = 0;
		for (let i=0; i < marks.length; i++){
			sum += marks[i];
		}
		if (marks.length ===0)
			return 0;
		else
			return sum / marks.length;
}

//console.log(getAverageScore({algebra:[3,4,5,4], geometry:[3,3,4], english:[5,5,5], russian:[4,5,3]}));
	


//task 3
function getPersonData(secretData) {
return {firstName: getDecodedValue(secretData.aaa), lastName: getDecodedValue(secretData.bbb)};
}

function getDecodedValue(secret) {
	if (secret) 
		return 'Эмильо';
	else return 'Родриго';
}

//console.log(getPersonData({aaa: 0, bbb: 0}));
//console.log(getPersonData({aaa: 1, bbb: 0}));
//console.log(getPersonData({aaa: 0, bbb: 1}));
//console.log(getPersonData({aaa: 1, bbb: 1}));