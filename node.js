"use strict"

class Node {
    constructor(value) {
        this.value = value
        this.left = undefined
        this.right = undefined
        this.parent = undefined
    }

    setParent(parent) {
        this.parent = parent
    }

    /**
     * populates the nodes
     * @param {*} value 
     */
    insert(value) {
        // handle first value to be assigned to root
        if (!this.value) {
            this.value = value
            return
        }

        // handle subsequent population logic
        if (value < this.value) {
            if (!this.left) {
                this.left = new Node(value)
                this.left.setParent(this)
            } else {
                this.left.insert(value)
            }
        } else {
            if (!this.right) {
                this.right = new Node(value)
                this.right.setParent(this)
            } else {
                this.right.insert(value)
            }
        }
    }

    /**
     * Using pre order traversal, no particular reason
     * @param {*} value 
     * @returns 
     */
    find(value) {
        if (!value) return
        if (this.value === value) return this

        let output = undefined
        if (this.left) output = this.left.find(value)
        if (output) return output

        if (this.right) output = this.right.find(value)
        if (output) return output
    }

    /**
     * Finds the smallest value of subTree
     * @param {*} node 
     * @returns 
     */
    findMin(node) {
        if (!node.left && !node.right) return node
        return this.findMin(node.left)
    }

    /**
     * To remove a node there will be 3 use cases
     * #1 leaf nodes
     * #2 node with 1 child node
     * #2 node with 2 child with subtree, to solve this we will use
     * inorder success or just check the right subtree and find the smallest value
     * once found use it and delete
     * @param {*} value 
     */
    remove(value) {
        // to delete the node find it first
        // then determine which of three use case to use
        let node = this.find(value)
        const parent = node.parent

        // check if leaf just delete
        if (!node.left && !node.right) {
            node = undefined
        } else if (node.left && node.right) {
            let minNode = this.findMin(node.right)
            node.value = minNode.value //swap value of node for deletion
            minNode.parent.left = undefined
        } else if (node.left || node.right) {
            const targetNode = node.left ?? node.right
            if (parent.left.value === node.value) {
                parent.left = targetNode
            } else if (parent.right.value === node.value) {
                parent.right = targetNode
            }
        }
    }
}

export default Node