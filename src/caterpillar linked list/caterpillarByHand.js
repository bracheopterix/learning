// TYPES of input
// T<number|string|boolean|null|undefined>
// T[]


class Catepillar {
    // I am a linked list!

    pushFront(n) {

        if (!this.head) {
            // no head? - this is new head!
            this.head = new Segment(n, undefined);
        }
        else {
            const newElement = new Segment(n, this.head);
            if (!this.head.next) {
                // no tail and now two segments? old head is noe new tail!
                this.tail = this.head;
                this.head.next = this.tail;
            }
            // replant dependencies and head
            newElement.next = this.head;
            this.head = newElement;
        }
        return console.log('added',n,'to the head');
    };

    pushBack(n) {

        if (!this.head) {
            // no head? - this is new head!
            this.head = new Segment(n, undefined);
            this.tail = this.head;
        }
        else {
            // else - create new butt-segment,make it next to thetail and replant a tail pointer
            const newElement = new Segment(n, undefined);
            this.tail.next = newElement;
            this.tail = newElement;
        }
        return console.log('added',n,'to the tail');

    };


    insert(n, id) {
        try {
            if (!id) {
                throw new Error('please, .insert(value,id)')
            }
            let element = this.head;
            let counter = 0;
            while (element && counter < id - 1) {
                element = element.next;
                if (!element) {
                    throw new Error('please, use existing id');
                }
                counter += 1;
            }
            const newElement = new Segment(n, element.next)
            element.next = newElement;
            return console.log('inserted',n,'to the id',id);


        } catch (error) {
            console.log('canselled insert', n, id, '-', error.message);
        }
    }


    print() {
        console.log('catepillar:');
        let element = this.head;
        let counter = 0;
        while (element) {
            console.log(element.value);
            element = element.next;
            counter += 1;
        };
    };

};

// without length



class Segment {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}




let caterpillar = new Catepillar();
CatP.pushBack(5);
CatP.pushBack(6);
CatP.pushBack(7);
CatP.pushFront(4);
CatP.pushFront(3);
CatP.pushFront(2);
CatP.pushFront(1);
CatP.insert(0, 3);
CatP.insert(0, 30);
CatP.insert(5);
CatP.insert([5,7],6);
CatP.insert({'a':5,'b':7},7);

CatP.pushFront();
CatP.pushBack(null);
CatP.pushFront(CatP.pushBack(5)); ///? TYPES




CatP.print();