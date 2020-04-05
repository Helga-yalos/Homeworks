'use strict';

function getAnimalSound(animal) {
    if (animal === undefined) 
    		return null;
	const animalSound = animal.sound;
			return animalSound;	
}

function getAverageMark(marks) {
	if (marks.length === 0)
		return 0;
	let sumMarks = 0;
	for (let i=0; i< marks.length; i++) {
		let mark = Number(marks[i]);
		sumMarks += mark;
	}
    return Math.round(sumMarks / marks.length);
}

function checkBirthday(birthday) {
    const now = Number(new Date());
    const birthdayDate = Date.parse(birthday);
    let age = (now - birthdayDate) / (( 3 * 31536000000 + 31622400000) / 4);
    return (age >18);
}