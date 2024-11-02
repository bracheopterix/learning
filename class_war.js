class Figure {
    constructor(verticesCount) {
        this.verticesCount = verticesCount;
    }
}

class TwoDFigure extends Figure {
}

class ThreeDFigure extends Figure {
}

class Circle extends TwoDFigure {
    constructor(radius) {
        super(1 / 0);
        this.radius = radius;
    }

    area = function () {
        const result = Math.PI * this.radius * this.radius;
        return result;
    }
}

class Triangle extends TwoDFigure {
    constructor(a, b, c) {
        super(3);
        this.a = a;
        this.b = b;
        this.c = c;
    }
    area = function () {
        const p = (this.a + this.b + this.c) / 2;
        const result = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return result;
    }
}


class Rectangle extends TwoDFigure {
    constructor(a, b) {
        super(4);
        this.a = a;
        this.b = b;
    }
    area = function () {
        const result = this.a * this.b;
        return result;
    }
}


class Cube extends ThreeDFigure {
    constructor(a) {
        super(8);
        this.a = a;
    }
    volume = function () {
        const result = this.a * this.a * this.a;
        return result;
    }
}

class Sphere extends ThreeDFigure {
    constructor(radius) {
        super(1 / 0);
    }
    volume = function () {
        result = (4 / 3) * Math.PI * this.radius * this.radius * this.radius;
    }
}



const circle1 = new Circle(5);
console.log(circle1.area());
circle1.radius = 10;
console.log(circle1.area());

const triangle1 = new Triangle(3, 4, 5);
console.log(triangle1.area());

const rectancle1 = new Rectangle(3, 4);
console.log(rectancle1.area());


const cube1 = new Cube(3);
console.log(cube1.volume());

const sphere1 = new Sphere(1);
console.log(sphere1.volume);



/*
figure -> 

-> 2d -> 
-> 3d -> 

прямоугольник, треугольник, круг, куб, сфера


*/







