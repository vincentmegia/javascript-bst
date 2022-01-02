"use strict"

class InorderProcessor {
    /**
     * Process the tree in Inorder traversal fashion, Left, Node, Right
     * @param {*} tree 
     */
    process(tree) {
        if (tree) {
            this.process(tree.left)
            console.log(tree.value)
            this.process(tree.right)
        }
    }
}

export default InorderProcessor