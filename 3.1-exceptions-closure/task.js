'use strict';

//task 1
function parseCount(someString) {
	let parseResult = Number.parseInt(someString, 10);
	if (isNaN(parseResult)) 
		throw new Error ("Невалидное значение");
	 else 
	return parseResult;
}
function validateCount(someValue) {
	try { 
		return parseCount(someValue);
	} catch(e) {
		 return e;
	}
}

//task 2
class Triangle {
	constructor(a,b,c){
		this.a = a;
		this.b = b;
		this.c = c;
		if (((this.a + this.b) < this.c) || ((this.b + this.c) < this.a) || ((this.a + this.c) < this.b)) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
 }

	getPerimeter() {
		return (this.a + this.b + this.c);
	}

	getArea() {
		const p = (this.a + this.b + this.c) / 2;
		const area = Math.sqrt( p * (p - this.a) * (p - this.b) * (p - this.c));
		return +area.toFixed(3);
	}
}

class FakeTriangle {
	getPerimeter() {
		return "Ошибка! Неправильный треугольник";
	}
	getArea() {
		return "Ошибка! Неправильный треугольник";
	}
}

 function getTriangle(a,b,c) {
 	try { 
		return new Triangle(a,b,c);
 	}catch(e){ 
 		return new FakeTriangle();
    }
 }