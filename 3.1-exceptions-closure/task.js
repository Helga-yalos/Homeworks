'use strict';

//task 1
function parseCount(someString) {
	let parseResult = Number.parseInt(someString, 10);
	if (isNaN(parseResult)) {
		const parseError = new Error ("Невалидное значение");
		return parseError;
	}
	return parseResult;
}
function validateCount(someValue) {
	let result;
	try { 
		result = parseCount(someValue);
		return result;
	} catch(e) {
		 throw e;
	}
}

//task 2
class Triangle {
	constructor(a,b,c){
		this.a = a;
		this.b = b;
		this.c = c;
		if (((this.a + this.b) < this.c) || ((this.b + this.c) < this.a) || ((this.a + this.c) < this.b)) {
			const testError = new Error('Треугольник с такими сторонами не существует');
			throw testError;
      
		}
 }

	getPerimeter() {
		try{
		return (this.a + this.b + this.c);
		} catch {
			throw new Error("Ошибка! Неправильный треугольник");
		}
	}
	getArea() {
		try{
		const p = (this.a + this.b + this.c) / 2;
		const area = Math.sqrt( p * (p - this.a) * (p - this.b) * (p - this.c));
		return +area.toFixed(3);
			}catch(e) {
				throw new Error("Ошибка! Неправильный треугольник");
			}
	}
}

 function getTriangle(a,b,c) {
 	try { 
     const triangle = new Triangle(a,b,c);
        return triangle;
 	} catch(e){ try {
 	  return {p: triangle.getPerimeter(), s: triangle.getArea()};
               } catch(err) {
                       throw new Error("Ошибка! Неправильный треугольник");
                       }
  
             }
 }