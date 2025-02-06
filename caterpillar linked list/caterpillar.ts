// TYPES of input
// T<number|string|boolean|null|undefined>
// T[]

type MultyValue = number | string | boolean | null | undefined | object;
type SegmentType = {
    value: MultyValue,
    next: SegmentType
};

class Segment {
    value: MultyValue;
    next: SegmentType;
    constructor(value: MultyValue, next: SegmentType) {
        this.value = value;
        this.next = next;
    }
}

class Caterpillar {
    // I am a linked list!
    head: SegmentType;
    tail: SegmentType;

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
            this.tail.next = newElement;
            this.tail = newElement;
        }
        return console.log('added', n, 'to the tail');

    };


    insert(n: MultyValue, id: number) {
        try {
            if (!id) {
                throw new Error('please, .insert(value,id)')
            }
            let element: SegmentType = this.head;
            let counter: number = 0;
            while (element && counter < id - 1) {
                element = element.next;
                if (!element) {
                    throw new Error('please, use existing id');
                }
                counter += 1;
            }
            const newElement = new Segment(n, element.next)
            element.next = newElement;
            return console.log('inserted', n, 'to the id', id);


        } catch (error) {
            console.log('canselled insert', n, id, '-', error.message);
        }
    }


    print() {
        console.log('caterpillar:');
        let element: SegmentType = this.head;
        let counter: number = 0;
        while (element) {
            console.log(element.value);
            element = element.next;
            counter += 1;
        };
    };

};

// without length








let caterpillar = new Caterpillar();
caterpillar.pushBack(5);
caterpillar.pushBack(6);
caterpillar.pushBack(7);
caterpillar.pushFront(4);
caterpillar.pushFront(3);
caterpillar.pushFront(2);
caterpillar.pushFront(1);
caterpillar.insert(0, 3);
caterpillar.insert(0, 30);
// caterpillar.insert(5);
// caterpillar.insert([5, 7], 6);
// caterpillar.insert({ 'a': 5, 'b': 7 }, 7);

// caterpillar.pushFront();
// caterpillar.pushBack(null);
// caterpillar.pushFront(catepillar.pushBack(5)); ///? TYPES




caterpillar.print();

/// nanannaa