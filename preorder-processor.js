"use strict"

class PreorderProcessor {
    /**
     * Process the tree in preorder fashion, Node, Left, Right
     * @param {} tree 
     */
    process(tree) {
        if (tree) {
            console.log(tree.value)
            this.process(tree.left)
            this.process(tree.right)
        }
    }
}

export default PreorderProcessor