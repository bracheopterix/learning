// npx ts-node src/caterpillarLinkedList/caterpillar.ts   

type SegmentType<T> = {
    value: T,
    next: SegmentType<T> | undefined,
};

class Caterpillar<T> {
    // I am a linked list!
    head?: SegmentType<T>;
    tail?: SegmentType<T>;

    pushFront(value: T) {

        if (!this.head) {
            // no head? - this is new head!
            this.head = {value, next: undefined};
        }
        else {
            const newElement = {value, next: this.head};
            if (!this.head.next) {
                // no tail and now two segments? old head is noe new tail!
                this.tail = this.head;
                this.head.next = this.tail;
            }
            // replant dependencies and head
            newElement.next = this.head;
            this.head = newElement;
        }
        return console.log('added', value, 'to the head');
    };

    pushBack(value: T) {

        if (!this.head) {
            // no head? - this is new head!
            this.head = { value, next: undefined };
            this.tail = this.head;
        }
        else {
            // else - create new butt-segment,make it next to thetail and replant a tail pointer
            const newElement = { value, next: undefined };
            if (this.tail) {
                this.tail.next = newElement;
                this.tail = newElement;
            } else {
                this.tail = newElement;
            }

        }
        return console.log('added', value, 'to the tail');

    };

    insert(value: T, index: number) { 
        try {
            if (!this.head) {
                throw new Error('caterpillar is empty');
            }
            if (!index) {
                throw new Error('please, .insert(value,id)')
            }
            if (index === 0) {
                console.log('inserted', value, 'as a head');
                return this.pushFront(value);
            }

            let element = this.head;
            let counter: number = 0;
            while (element && counter < index - 1) {
                if (!element.next) {
                    throw new Error('please, use existing id');
                }
                element = element.next;
                counter += 1;
            }
            if (this.tail===element) {
                console.log('inserted', value, 'as a tail');
                return this.pushBack(value);
            }
            else{
                const newElement = { value, next: element.next };
                element.next = newElement;
                return console.log('inserted', value, 'to the id', index);
            }
            


        } catch (error: any) {
            console.log('canselled insert', value, index, '-', error.message);
        }
    }


    print() {
        for (let el of catP.iterate()){
            console.log(el);
        }
    };

    *iterate() {
        //allows iterate as for (let el of this.iterate());
        let element = this.head;
        while (element) {
            yield element.value;
            if (element.next == null) {
                break;
            };
            element = element.next;
        }
    }
};


const catP = new Caterpillar<number>();
catP.pushBack(5);
catP.pushBack(6);
catP.pushBack(7);
catP.pushFront(4);
catP.pushFront(3);
catP.pushFront(2);
catP.pushFront(1);
catP.insert(0, 3);
catP.insert(7, 30);  


console.log([...catP.iterate().map(x => x*x)])  // cool A+ thing


// for (let el of catP.iterate()){
//     console.log(el.value * 2);
// }
