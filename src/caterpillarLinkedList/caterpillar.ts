// TYPES of input
// T<number|string|boolean|null|undefined>
// T[]

// generic type

// for each by caterpillar. for each.!!!

type MultyValue = number | string | boolean | null | undefined | object | MultyValue[];
type SegmentType = {
    value: MultyValue,
    next: SegmentType | undefined, // and maybe here too undefined
};

class Segment {
    value: MultyValue;
    next: SegmentType | undefined;   // here undefined hneeds to be an option
    constructor(value: MultyValue, next: SegmentType | undefined) {
        this.value = value;
        this.next = next;
    }
}

class Caterpillar {
    // I am a linked list!
    head?: SegmentType;
    tail?: SegmentType;

    pushFront(n: MultyValue) {

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
        return console.log('added', n, 'to the head');
    };

    pushBack(n: MultyValue) {

        if (!this.head) {
            // no head? - this is new head!
            this.head = new Segment(n, undefined);
            this.tail = this.head;
        }
        else {
            // else - create new butt-segment,make it next to thetail and replant a tail pointer
            const newElement = new Segment(n, undefined);
            if (this.tail) {
                this.tail.next = newElement;
                this.tail = newElement;
            } else {
                this.tail = newElement;
            }

        }
        return console.log('added', n, 'to the tail');

    };


    insert(n: MultyValue, id: number) {  // insert 0 = pushFront, insert id=length =pushBack
        try {
            if (!this.head) {
                throw new Error('caterpillar is empty');
            }
            if (!id) {
                throw new Error('please, .insert(value,id)')
            }
            if (id === 0) {
                console.log('inserted', n, 'as a head');
                return this.pushFront(n);
            }

            let element = this.head;
            let counter: number = 0;
            while (element && counter < id - 1) {
                if (!element.next) {
                    throw new Error('please, use existing id');
                }
                element = element.next;
                counter += 1;
            }
            if (this.tail===element) {
                console.log('inserted', n, 'as a tail');
                return this.pushBack(n);
            }
            else{
                const newElement = new Segment(n, element.next)
                element.next = newElement;
                return console.log('inserted', n, 'to the id', id);
            }
            


        } catch (error: any) {
            console.log('canselled insert', n, id, '-', error.message);
        }
    }


    print() {
        console.log('caterpillar:');
        let element = this.head;
        let counter: number = 0;
        while (element) {
            console.log(element.value);
            element = element.next;
            counter += 1;
        };
    };

    *iterate() {
        //for element of caterpillar {make this} generator on the basis of our list
        // array have Array.values
        // object have Object.entries
        // yield
        let element = this.head;
        while (element) {
            yield element;
            if (element.next = undefined) {
                break;
            };
            element = element.next;
        }
    }

    iter = this.iterate();

};


let CatP = new Caterpillar();
CatP.pushBack(5);
CatP.pushBack(6);
CatP.pushBack(7);
CatP.pushFront(4);
CatP.pushFront(3);
CatP.pushFront(2);
CatP.pushFront(1);
CatP.insert(0, 3);
CatP.insert(7, 30);  


for (let el of CatP.iter){
    console.log(el.value);
}

// CatP.iterate;

// CatP.print();


/// nanannaa