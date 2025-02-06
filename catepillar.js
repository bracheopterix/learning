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


        } catch (error) {
            console.log('insert command', n, id, 'cancelled -', error.message);
        }
    }


    print() {
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



let catepillar = new Catepillar();
catepillar.pushBack(5);
catepillar.pushBack(6);
catepillar.pushBack(7);
catepillar.pushFront(4);
catepillar.pushFront(3);
catepillar.pushFront(2);
catepillar.pushFront(1);
catepillar.insert(0, 3);
catepillar.insert(0, 30);
catepillar.insert(5);




catepillar.print();