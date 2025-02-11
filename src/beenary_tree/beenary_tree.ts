// npx ts-node src/beenary_tree/beenary_tree.ts   



// binary tree of numbers as a data structure 
// if element less than a node - it goes to the left branch and seek for a free place to set in

// add to the tree operation
// print the tree (4 functions:
//* inorder      4251637
//* preorder     1245367
//* postorder    4526731
//* level order  1234567 )

type Branch<T> = {
    value: number,
    left?: Branch<T>,
    right?: Branch<T>,
    // parent: Branch<T> | undefined,
}

function printInOrderTreeImpl<T>(element: Branch<T>, depth: number) {
    if (element.left) {
        printInOrderTreeImpl(element.left, depth + 1);
    }
    console.log(' '.repeat(depth), element.value);
    if (element.right) {
        printInOrderTreeImpl(element.right, depth + 1);
    }
}

function printInOrderTree<T>(element: Branch<T>) {
    printInOrderTreeImpl(element, 0);
}

function insert(value: number, tree: Branch<number>): boolean {
    if(value<tree.value){
        if(!tree.left){
            tree.left = {value:value};
            return true;
        }
        else{
            return insert(value,tree.left);
        }
    }
    if(value>tree.value){
        if(!tree.right){
            tree.right = {value:value};
            return true;
        }
        else{
            return insert(value,tree.right);
        }
    }

    // insert by the rule 
    return false;
}

//     4
//    3  5
//   1    6

// class Beenary<T> {
//     root?: Branch<T> | undefined;

//     add(value: number, node: Branch<T>) {
//         if (!this.root) {
//             // no root in the tree? create it from value and finish on this.
//             // this.root = { value: value, left: undefined, right: undefined, parent: undefined };
//             return `added ${value} as a root`;
//         }
//         else {
//             if (!node) {
//                 // if node was't defined, I believe this is the first usage of function
//                 // so we statred recursion from the root.
//                 let node: Branch<T> | undefined = this.root;
//             }

//             while (true) {
//                 if (value = node.value) {
//                     return `we already have this value in the tree`;
//                 }
//                 if (value < node.value) {
//                     if (!node.left) {
//                         // added left
//                         let newNode = { value: value, left: undefined, right: undefined, parent: node }
//                         node.left = newNode;
//                         return `added ${value} as a left child of ${node.value}`;
//                     }
//                     else {
//                         // go on the next cycle
//                         node = node.left;
//                         console.log(`checking ${value} against left node`);
//                         this.add(value, node);
//                     }
//                 }
//                 if (value > node.value) {
//                     if (!node.right) {
//                         //added right
//                         let newNode = { value: value, left: undefined, right: undefined, parent: node }
//                         node.right = newNode;
//                         return `added ${value} as a right child of ${node.value}`;
//                     }
//                     else {
//                         // go on the next cycle
//                         node = node.right;
//                         console.log(`checking ${value} against right node`);
//                         this.add(value, node);
//                     }
//                 }
//             }
//         }
//     }


//     print() {
//         if (!this.root) {
//             return "there are no elements in the tree";
//         }
//         let element = this.root;
//         let node: Branch<T>;

//         if (!element.left && !element.right) {
//             console.log(element);
//         }
//         else {
//             if (element.left) {
//                 console.log(element.left);
//                 // element.print();
//             }
//             console.log(element);
//             if (element.right) {
//                 console.log(element.right);
//             }
//         }
//     }
// }

const tree: Branch<number> = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 6
        },
        right: {
            value: 7
        }
    }
}

// insert(4,tree);
printInOrderTree(tree);

// insert(10)