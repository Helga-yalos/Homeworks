'use strict'

function getResult(a,b,c){
	let discriminant = ( b**2 ) - (4 * a * c);
	let x = [];
	if (discriminant < 0) {
		x = [];
	} else if (discriminant === 0) {
		x[0] = - ( b / (2 * a));
	} else {
		x[0] = (- b + Math.sqrt(discriminant)) / ( 2*a );
		x[1] = (- b - Math.sqrt(discriminant)) / ( 2*a );
	}
    return x;
}

function getAverageMark(marks){
	let averageMark;
	let sumMarks = 0;
	if (marks.length !== 0) {
	  if (marks.length > 5) {
		  marks.splice(5);
		  console.log ('Учитываются только первые 5 оценок');
      console.log (marks);
	    }
	  for (let i = 0; i < marks.length; i++) {
		sumMarks += marks[i];
	   }
     averageMark = sumMarks / marks.length;
     return averageMark;
  	} else 
    averageMark = 0;
    return averageMark;
}

function askDrink(name,dateOfBirthday){
	let result;
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (age < 18 ) {
    	result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } else {
    	result = `Не желаете ли олд-фэшн, ${name}?`
    }
    return result;
}