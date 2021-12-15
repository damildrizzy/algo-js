
class BinaryTree{

    constructor(rootObj) {
        this.key = rootObj;
        this.leftNode = null;
        this.rightNode = null;
    }

    insertLeft(node) {
        if (this.leftNode === null) {
            this.leftNode = new BinaryTree(node);
        } else {
            let t = new BinaryTree(node);
            t.leftNode = this.leftNode;
            this.leftNode = t
        }
    }

    insertRight(node) {
        if (this.rightNode === null) {
            this.rightNode = new BinaryTree(node);
        } else {
            let t = new BinaryTree(node);
            t.rightNode = this.rightNode;
            this.rightNode = t
        }
    }

    getLeftChild() {
        return this.leftNode;
    }

    getRightChild() {
        return this.rightNode;
    }

    setRootVal(obj) {
        this.key = obj;
    }

    getRootVal() {
        return this.key;
    }
}

let root = new BinaryTree('root')
root.insertLeft("a1")
root.insertLeft("a")
root.insertRight("b")
let b = root.getRightChild()
b.insertRight("b1")

function preorder(tree) {
    if (tree !== null) {
        console.log(tree.getRootVal())
        preorder(tree.getLeftChild())
        preorder(tree.getRightChild())
    }
}

function inorder(tree) {
    if (tree !== null) {
        inorder(tree.getLeftChild())
        console.log(tree.getRootVal())
        inorder(tree.getRightChild())
    }
}

inorder(root)