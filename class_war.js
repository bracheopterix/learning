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
    constructor(a, b, c){
        super(3);
        this.a = a;
        this.b = b;
        this.c = c;
    }
    area = function () {
        const p = (this.a + this.b + this.c)/2;
        const result = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));
        return result;
    }
}



const circle1 = new Circle(5);
console.log(circle1.area());
circle1.radius = 10;
console.log(circle1.area());

const triangle1 = new Triangle(3,4,5);
console.log(triangle1.area());

/*
figure -> 

-> 2d -> 
-> 3d -> 

прямоугольник, треугольник, круг, куб, сфера


r = x

int(2px dx) =p int(2x dx)

f(x) = x^n
f'(x) = nx^n-1

f'(x)  = 2x
f(x) = pr^2




*/







