class PostorderProcessor {
    /**
     * Process the tree in post order fashion, Left, Right, Node
     * @param {*} tree 
     */
    process(tree) {
        if (tree) {
            this.process(tree.left)
            this.process(tree.right)
            console.log(tree.value)
        }
    }
}

export default PostorderProcessor