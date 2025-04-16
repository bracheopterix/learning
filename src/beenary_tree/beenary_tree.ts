// npx ts-node src/beenary_tree/beenary_tree.ts   



// binary tree of numbers as a data structure 
// if element less than a node - it goes to the left branch and seek for a free place to set in

// add to the tree operation
// print the tree (4 functions:
//* inorder      4251637
//* preorder     1245367
//* postorder    4526731
//* level order  1234567 )

class Tree<T> {
    value: T;
    left?: Tree<T>;
    right?: Tree<T>;

    compareFn: (left: T, right: T) => "<" | ">" | "=";

    constructor(value: T, compareFn: (left: T, right: T) => "<" | ">" | "=", left?: Tree<T>, right?: Tree<T>) {
        this.value = value;
        this.compareFn = compareFn;
        this.left = left;
        this.right = right;
    }

    private printInOrderTreeImpl(depth: number) {
        if (this.left) {
            this.left.printInOrderTreeImpl(depth + 1);
        }
        console.log(' '.repeat(depth), this.value);
        if (this.right) {
            this.right.printInOrderTreeImpl(depth + 1);
        }
    }

    printInOrderTree() {
        this.printInOrderTreeImpl(0);
    }

    /// NEW
    private printPreOrderTreeImpl(depth: number) {   //what if we don't have left
        console.log(' '.repeat(depth), this.value);
        if (this.left) {
            this.left.printPreOrderTreeImpl(depth + 1);
        }
        if (this.right) {
            this.right.printPreOrderTreeImpl(depth + 1);
        }
    }

    printPreOrderTree() {
        this.printPreOrderTreeImpl(0);
    }

    ///NEW

    private printPostOrderTreeImpl(depth: number) {
        if (this.left) {
            this.left.printPostOrderTreeImpl(depth + 1);
        }
        if (this.right) {
            this.right.printPostOrderTreeImpl(depth + 1);
        }
        console.log(' '.repeat(depth), this.value);
    }

    printPostOrderTree() {
        this.printPostOrderTreeImpl(0);
    }



    ///
    insert(value: T): boolean {
        const compareResult = this.compareFn(value, this.value);
        if (compareResult === "<") {
            if (!this.left) {
                this.left = new Tree(value, this.compareFn);
                return true;
            }
            else {
                return this.left.insert(value);
            }
        }
        if (compareResult === ">") {
            if (!this.right) {
                this.right = new Tree(value, this.compareFn);
                return true;
            }
            else {
                return this.right.insert(value);
            }
        }

        // insert by the rule 
        return false;
    }


    *iterPreOrder(): Generator<T, void, unknown> {
        yield this.value;
        if (this.left) {
            const leftItems = this.left.iterPreOrder();
            for (let x of leftItems) {
                yield x;
            }
        }
        if (this.right) {
            const rightItems = this.right.iterPreOrder();
            for (let x of rightItems) {
                yield x;
            }
        }
    }


    /////THIS TWO
    // Сделать второй constructor,который принимает (value, left, right)

    // нужна мапа, а значит новое дерево
    // каждый элемент - такой же самый, но с модифицированным значением



    map<R>(fn: (arg: T) => R, compareFn: (left: R, right: R) => "<" | ">" | "="): Tree<R> {   /// O(n)
        if (!this) {
            throw null;
        }
        else {

            const newTree = new Tree(fn(this.value), compareFn, this.left?.map(fn, compareFn), this.right?.map(fn, compareFn));
            return newTree;

        }
    };
    // created functor interface for out tree
    // ^ class Functor f where
    // map :: (a -> b) -> f<a> -> f<b>






    // collector(tree: Tree<T>, newTree: Tree<R>, fn: (arg: T) => R) {
    //     newTree.insert(fn(tree.value))
    //     if (this.left) {
    //         this.collector(tree.left, newTree, fn)
    //     }
    //     if (this.right) {
    //         this.collector(tree.right, newTree, fn);
    //     }
    // }

}

const tree = new Tree(25, (a, b) => a < b ? "<" : a > b ? ">" : "=");
tree.insert(15);
tree.insert(50);
tree.insert(10);
tree.insert(22);
tree.insert(35);
tree.insert(70);
tree.insert(4);
tree.insert(12);
tree.insert(18);
tree.insert(24);
tree.insert(31);
tree.insert(44);
tree.insert(66);
tree.insert(90);

// console.log('inorder');
// tree.printInOrderTree();
// console.log('preorder');
// tree.printPreOrderTree();
// console.log('postorder');
// tree.printPostOrderTree();


// for (let el of tree.iterPreOrder()) {
//     console.log(el);
// }

tree.printInOrderTree();
console.log("tree2");
const tree2 = tree.map(x => x * x, tree.compareFn);
tree2.printInOrderTree();

// for (let el of tree2.iterPreOrder()) {
//     console.log(el); // 625 225 100 16 ...
// }