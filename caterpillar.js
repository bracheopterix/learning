// TYPES of input
// T<number|string|boolean|null|undefined>
// T[]
var Segment = /** @class */ (function () {
    function Segment(value, next) {
        this.value = value;
        this.next = next;
    }
    return Segment;
}());
var Caterpillar = /** @class */ (function () {
    function Caterpillar() {
    }
    Caterpillar.prototype.pushFront = function (n) {
        if (!this.head) {
            // no head? - this is new head!
            this.head = new Segment(n, undefined);
        }
        else {
            var newElement = new Segment(n, this.head);
            if (!this.head.next) {
                // no tail and now two segments? old head is noe new tail!
                this.tail = this.head;
                this.head.next = this.tail;
            }
            // replant dependencies and head
            newElement.next = this.head;
            this.head = newElement;
        }
        return console.log('added', n, 'to the head');
    };
    ;
    Caterpillar.prototype.pushBack = function (n) {
        if (!this.head) {
            // no head? - this is new head!
            this.head = new Segment(n, undefined);
            this.tail = this.head;
        }
        else {
            // else - create new butt-segment,make it next to thetail and replant a tail pointer
            var newElement = new Segment(n, undefined);
            this.tail.next = newElement;
            this.tail = newElement;
        }
        return console.log('added', n, 'to the tail');
    };
    ;
    Caterpillar.prototype.insert = function (n, id) {
        try {
            if (!id) {
                throw new Error('please, .insert(value,id)');
            }
            var element = this.head;
            var counter = 0;
            while (element && counter < id - 1) {
                element = element.next;
                if (!element) {
                    throw new Error('please, use existing id');
                }
                counter += 1;
            }
            var newElement = new Segment(n, element.next);
            element.next = newElement;
            return console.log('inserted', n, 'to the id', id);
        }
        catch (error) {
            console.log('canselled insert', n, id, '-', error.message);
        }
    };
    Caterpillar.prototype.print = function () {
        console.log('catepillar:');
        var element = this.head;
        var counter = 0;
        while (element) {
            console.log(element.value);
            element = element.next;
            counter += 1;
        }
        ;
    };
    ;
    return Caterpillar;
}());
;
// without length
var catepillar = new Caterpillar();
catepillar.pushBack(5);
catepillar.pushBack(6);
catepillar.pushBack(7);
catepillar.pushFront(4);
catepillar.pushFront(3);
catepillar.pushFront(2);
catepillar.pushFront(1);
catepillar.insert(0, 3);
catepillar.insert(0, 30);
// catepillar.insert(5);
// catepillar.insert([5, 7], 6);
// catepillar.insert({ 'a': 5, 'b': 7 }, 7);
// catepillar.pushFront();
// catepillar.pushBack(null);
// catepillar.pushFront(catepillar.pushBack(5)); ///? TYPES
catepillar.print();
